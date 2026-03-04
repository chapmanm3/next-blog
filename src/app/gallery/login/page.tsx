import PasswordGate from '@/components/gallery/PasswordGate'
import styles from '@/styles/gallery.module.scss'

export const metadata = {
  title: 'Gallery Login',
  robots: { index: false, follow: false },
}

export default function GalleryLoginPage() {
  return (
    <main className={styles.loginMain}>
      <PasswordGate />
    </main>
  )
}
