'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/gallery.module.scss'

export default function PasswordGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/gallery/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/gallery')
      router.refresh()
    } else {
      setError('Incorrect password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h1>Wedding Gallery</h1>
      <p>Enter the password to view photos</p>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.passwordInput}
          autoFocus
          required
        />
        {error && <p className={styles.formError}>{error}</p>}
        <button type="submit" disabled={loading || !password} className={styles.loginBtn}>
          {loading ? 'Entering…' : 'Enter Gallery'}
        </button>
      </form>
    </div>
  )
}
