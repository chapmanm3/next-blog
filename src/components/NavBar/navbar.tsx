'use client'

import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { CgMenu } from "react-icons/cg"

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
      <CgMenu style={{ margin: "4px" }} onMouseEnter={hoverOpen} />
      <div className={styles.menuContainer} onMouseLeave={hoverClose}>
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

export default NavBar
