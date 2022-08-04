import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'

const NavBar = () => {

  const hoverOpen = () => {
    let elm = document.getElementsByClassName(styles.menuContainer)[0] as HTMLElement
    elm.style.width = '200px'
  }

  const hoverClose = () => {
    let elm = document.getElementsByClassName(styles.menuContainer)[0] as HTMLElement
    elm.style.width = '0px'
  }

  return (
    <div>
      <span className={`material-icons ${styles.menuIcon}`} onMouseEnter={hoverOpen}>menu</span>
      <div className={styles.menuContainer} onMouseLeave={hoverClose}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
        <a href="https://github.com/chapmanm3" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com/in/matt-chapman1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default NavBar
