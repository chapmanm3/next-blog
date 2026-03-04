'use client'

import { useEffect } from 'react'
import styles from '@/styles/gallery.module.scss'

interface Props {
  url: string | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

export default function Lightbox({ url, onClose, onPrev, onNext, hasPrev, hasNext }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className={styles.lightboxOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
        {url ? (
          <img src={url} alt="Wedding photo" className={styles.lightboxImg} />
        ) : (
          <div className={styles.lightboxLoading}>Loading…</div>
        )}
      </div>

      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">✕</button>

      {hasPrev && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
          onClick={e => { e.stopPropagation(); onPrev() }}
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}
      {hasNext && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxNext}`}
          onClick={e => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
        >
          ›
        </button>
      )}
    </div>
  )
}
