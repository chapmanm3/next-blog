import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { getManifest, getPresignedUrl } from '@/lib/r2'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session.isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const tag = searchParams.get('tag')
  const page = Math.max(0, parseInt(searchParams.get('page') ?? '0', 10))
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '48', 10)))

  let manifest
  try {
    manifest = await getManifest()
  } catch {
    return NextResponse.json({ error: 'Could not load photo manifest' }, { status: 500 })
  }

  const filtered = tag ? manifest.filter(p => p.tags.includes(tag)) : manifest
  const start = page * limit
  const batch = filtered.slice(start, start + limit)

  // Derive all unique tags from the full manifest (only needed on first page)
  const allTags = page === 0
    ? Array.from(new Set(manifest.flatMap(p => p.tags))).sort()
    : undefined

  // Generate presigned thumbnail URLs in parallel
  const thumbUrls: Record<string, string> = {}
  await Promise.all(
    batch.map(async photo => {
      thumbUrls[photo.key] = await getPresignedUrl(photo.thumb, 3600)
    })
  )

  return NextResponse.json({
    photos: batch,
    thumbUrls,
    total: filtered.length,
    hasMore: start + limit < filtered.length,
    ...(allTags !== undefined && { tags: allTags }),
  })
}
