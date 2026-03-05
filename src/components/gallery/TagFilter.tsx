'use client'

import styles from '@/styles/gallery.module.scss'

interface Props {
  tags: string[]
  selected: string | null
  onChange: (tag: string | null) => void
}

export default function TagFilter({ tags, selected, onChange }: Props) {
  return (
    <div className={styles.tagFilter}>
      <button
        className={`${styles.tagChip} ${selected === null ? styles.tagChipActive : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`${styles.tagChip} ${selected === tag ? styles.tagChipActive : ''}`}
          onClick={() => onChange(tag)}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </button>
      ))}
    </div>
  )
}
