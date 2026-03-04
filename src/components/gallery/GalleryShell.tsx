'use client'

import { useState, useEffect, useCallback } from 'react'
import TagFilter from './TagFilter'
import PhotoGrid, { Photo } from './PhotoGrid'
import Lightbox from './Lightbox'
import styles from '@/styles/gallery.module.scss'

export default function GalleryShell() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [thumbUrls, setThumbUrls] = useState<Record<string, string>>({})
  const [tags, setTags] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null)

  const fetchPhotos = useCallback(async (pageNum: number, tag: string | null, reset: boolean) => {
    setLoading(true)
    const params = new URLSearchParams({ page: String(pageNum), limit: '48' })
    if (tag) params.set('tag', tag)

    try {
      const res = await fetch(`/api/gallery/photos?${params}`)
      if (!res.ok) return
      const data = await res.json()

      setPhotos(prev => reset ? data.photos : [...prev, ...data.photos])
      setThumbUrls(prev => ({ ...prev, ...data.thumbUrls }))
      if (data.tags) setTags(data.tags)
      setHasMore(data.hasMore)
    } finally {
      setLoading(false)
    }
  }, [])

  // Reset and reload when tag changes
  useEffect(() => {
    setPhotos([])
    setPage(0)
    setHasMore(true)
    fetchPhotos(0, selectedTag, true)
  }, [selectedTag, fetchPhotos])

  const loadMore = useCallback(() => {
    const next = page + 1
    setPage(next)
    fetchPhotos(next, selectedTag, false)
  }, [page, selectedTag, fetchPhotos])

  const openPhoto = useCallback(async (photo: Photo, index: number) => {
    setSelectedIndex(index)
    setLightboxUrl(null)
    const res = await fetch(`/api/gallery/photo-url?key=${encodeURIComponent(photo.key)}`)
    const data = await res.json()
    setLightboxUrl(data.url)
  }, [])

  const closePhoto = useCallback(() => {
    setSelectedIndex(null)
    setLightboxUrl(null)
  }, [])

  const prevPhoto = useCallback(() => {
    if (selectedIndex === null || selectedIndex === 0) return
    openPhoto(photos[selectedIndex - 1], selectedIndex - 1)
  }, [selectedIndex, photos, openPhoto])

  const nextPhoto = useCallback(() => {
    if (selectedIndex === null || selectedIndex >= photos.length - 1) return
    openPhoto(photos[selectedIndex + 1], selectedIndex + 1)
  }, [selectedIndex, photos, openPhoto])

  async function handleLogout() {
    await fetch('/api/gallery/auth', { method: 'DELETE' })
    window.location.href = '/gallery/login'
  }

  return (
    <div className={styles.galleryShell}>
      <div className={styles.galleryHeader}>
        <h1>Wedding Gallery</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Log out
        </button>
      </div>

      <TagFilter tags={tags} selected={selectedTag} onChange={setSelectedTag} />

      <PhotoGrid
        photos={photos}
        thumbUrls={thumbUrls}
        loading={loading}
        hasMore={hasMore}
        onLoadMore={loadMore}
        onPhotoClick={openPhoto}
      />

      {selectedIndex !== null && (
        <Lightbox
          url={lightboxUrl}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < photos.length - 1}
        />
      )}
    </div>
  )
}
