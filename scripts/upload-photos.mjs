#!/usr/bin/env node
/**
 * Wedding Photo Upload Script
 *
 * Uploads photos to Cloudflare R2, generates thumbnails, and creates/updates
 * the manifest.json that the gallery app reads.
 *
 * SETUP (run once):
 *   npm install sharp   (in this scripts/ directory, or globally)
 *
 * USAGE (run from the project root):
 *   node scripts/upload-photos.mjs /path/to/your/photos
 *
 * FOLDER STRUCTURE:
 *   Your photos folder should use subdirectories as tag names:
 *
 *     photos/
 *       ceremony/
 *         IMG_001.jpg
 *         IMG_002.jpg
 *       reception/
 *         IMG_003.jpg
 *       getting-ready/
 *         IMG_004.jpg
 *
 *   Photos in nested folders get all parent folder names as tags:
 *     ceremony/portraits/IMG_005.jpg → tags: ["ceremony", "portraits"]
 *
 * RESUMING:
 *   The script checks R2 for an existing manifest and skips already-uploaded
 *   photos. Safe to run multiple times or in batches.
 */

import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { readdir, readFile, stat } from 'fs/promises'
import { existsSync, readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ── Load .env.local from project root ────────────────────────────────────────
const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const envPath = path.join(projectRoot, '.env.local')
if (existsSync(envPath)) {
  const lines = readFileSync(envPath, 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = val
  }
}

// ── Lazy-load sharp (must be installed separately) ───────────────────────────
let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.error('Error: sharp is not installed.')
  console.error('Run: npm install sharp  (inside the scripts/ folder or globally)')
  process.exit(1)
}

// ── R2 client ─────────────────────────────────────────────────────────────────
const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error('Missing R2 environment variables. Check your .env.local file.')
  process.exit(1)
}

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
})

// ── Helpers ───────────────────────────────────────────────────────────────────
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tiff'])
const THUMB_WIDTH = 800

async function walkDir(dir, tags = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  const results = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const sub = await walkDir(fullPath, [...tags, entry.name.toLowerCase().replace(/\s+/g, '-')])
      results.push(...sub)
    } else if (entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      results.push({ fullPath, name: entry.name, tags })
    }
  }
  return results
}

async function upload(key, buffer, contentType) {
  await r2.send(new PutObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key, Body: buffer, ContentType: contentType }))
}

async function loadExistingManifest() {
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: 'manifest.json' }))
    const body = await res.Body.transformToString()
    return JSON.parse(body)
  } catch {
    return []
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const photosDir = process.argv[2]
  if (!photosDir) {
    console.error('Usage: node scripts/upload-photos.mjs /path/to/photos-folder')
    process.exit(1)
  }

  const dirStat = await stat(photosDir).catch(() => null)
  if (!dirStat?.isDirectory()) {
    console.error(`Error: "${photosDir}" is not a directory`)
    process.exit(1)
  }

  console.log(`Scanning ${photosDir}…`)
  const photos = await walkDir(photosDir)
  console.log(`Found ${photos.length} photos\n`)

  const existingManifest = await loadExistingManifest()
  console.log(`Existing manifest: ${existingManifest.length} entries\n`)

  const existingKeys = new Set(existingManifest.map(p => p.key))
  const newEntries = []
  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const photo of photos) {
    const tagPath = photo.tags.length > 0 ? photo.tags.join('/') : 'uncategorized'
    const photoKey = `photos/${tagPath}/${photo.name}`
    const thumbKey = `thumbnails/${tagPath}/${photo.name}`

    if (existingKeys.has(photoKey)) {
      skipped++
      continue
    }

    process.stdout.write(`[${uploaded + skipped + failed + 1}/${photos.length}] ${photo.name} [${photo.tags.join(', ') || 'uncategorized'}] … `)

    try {
      const buffer = await readFile(photo.fullPath)
      const ext = path.extname(photo.name).toLowerCase()
      const contentType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'

      // Upload full-res original
      await upload(photoKey, buffer, contentType)

      // Generate and upload thumbnail
      const thumbBuffer = await sharp(buffer)
        .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: 82 })
        .toBuffer()
      await upload(thumbKey, thumbBuffer, 'image/jpeg')

      const tags = photo.tags.length > 0 ? photo.tags : ['uncategorized']
      newEntries.push({ key: photoKey, thumb: thumbKey, tags })
      uploaded++
      console.log('✓')
    } catch (err) {
      console.log(`✗ (${err.message})`)
      failed++
    }
  }

  if (newEntries.length > 0) {
    const updatedManifest = [...existingManifest, ...newEntries]
    await upload(
      'manifest.json',
      Buffer.from(JSON.stringify(updatedManifest, null, 2)),
      'application/json'
    )
    console.log(`\n✓ Manifest updated (${updatedManifest.length} total entries)`)
  }

  console.log(`\nDone — uploaded: ${uploaded}, skipped: ${skipped}, failed: ${failed}`)
}

main().catch(err => {
  console.error('\nFatal error:', err.message)
  process.exit(1)
})
