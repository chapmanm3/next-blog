import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { getPresignedUrl } from '@/lib/r2'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session.isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const key = req.nextUrl.searchParams.get('key')
  if (!key || !key.startsWith('photos/')) {
    return NextResponse.json({ error: 'Invalid key' }, { status: 400 })
  }

  const url = await getPresignedUrl(key, 3600)
  return NextResponse.json({ url })
}
