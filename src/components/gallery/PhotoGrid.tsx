'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/gallery.module.scss'

export interface Photo {
  key: string
  thumb: string
  tags: string[]
}

interface Props {
  photos: Photo[]
  thumbUrls: Record<string, string>
  loading: boolean
  hasMore: boolean
  onLoadMore: () => void
  onPhotoClick: (photo: Photo, index: number) => void
}

export default function PhotoGrid({
  photos,
  thumbUrls,
  loading,
  hasMore,
  onLoadMore,
  onPhotoClick,
}: Props) {
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasMore || loading) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) onLoadMore()
      },
      { threshold: 0.1 }
    )
    const sentinel = sentinelRef.current
    if (sentinel) observer.observe(sentinel)
    return () => {
      if (sentinel) observer.unobserve(sentinel)
    }
  }, [hasMore, loading, onLoadMore])

  if (photos.length === 0 && !loading) {
    return <p className={styles.emptyState}>No photos found for this tag.</p>
  }

  return (
    <div>
      <div className={styles.photoGrid}>
        {photos.map((photo, i) => (
          <button
            key={photo.key}
            className={styles.photoItem}
            onClick={() => onPhotoClick(photo, i)}
            aria-label="View photo"
          >
            {thumbUrls[photo.key] ? (
              <img
                src={thumbUrls[photo.key]}
                alt=""
                className={styles.thumbImg}
                loading="lazy"
              />
            ) : (
              <div className={styles.thumbPlaceholder} />
            )}
          </button>
        ))}
      </div>
      {loading && <p className={styles.loadingState}>Loading…</p>}
      <div ref={sentinelRef} style={{ height: 1 }} />
    </div>
  )
}
