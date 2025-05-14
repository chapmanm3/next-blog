import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'

export function NavBar() {

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuContainer}>
        <Link href="/">
          Home
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/resume">
          Resume
        </Link>
        <Link href="mailto:mattchapmantech@gmail.com" target="_blank" rel="noopener noreferrer">
          Contact Me
        </Link>
        <a href="https://github.com/chapmanm3" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com/in/matt-chapman1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
