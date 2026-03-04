import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import GalleryShell from '@/components/gallery/GalleryShell'
import styles from '@/styles/gallery.module.scss'

export const metadata = {
  title: 'Wedding Gallery',
  robots: { index: false, follow: false },
}

export default async function GalleryPage() {
  const session = await getSession()
  if (!session.isAuthenticated) {
    redirect('/gallery/login')
  }

  return (
    <main className={styles.galleryMain}>
      <GalleryShell />
    </main>
  )
}
