import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { unstable_cache } from 'next/cache'

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
})

export interface PhotoEntry {
  key: string    // full-res key: photos/ceremony/001.jpg
  thumb: string  // thumbnail key: thumbnails/ceremony/001.jpg
  tags: string[]
}

export async function getPresignedUrl(key: string, expiresIn = 3600): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME as string,
    Key: key,
  })
  return getSignedUrl(r2Client, command, { expiresIn })
}

export const getManifest = unstable_cache(
  async (): Promise<PhotoEntry[]> => {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME as string,
      Key: 'manifest.json',
    })
    const response = await r2Client.send(command)
    const body = await response.Body!.transformToString()
    return JSON.parse(body)
  },
  ['gallery-manifest'],
  { revalidate: 3600 }
)
