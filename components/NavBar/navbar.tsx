import React from 'react'
import styles from './navbar.module.scss'

const NavBar = () => {

  const hoverOpen = () => {
    document.getElementsByClassName(styles.menuContainer)[0].style.width = "200px"
  }

  const hoverClose = () => {
    document.getElementsByClassName(styles.menuContainer)[0].style.width = "0px"
  }

  return (
    <div>
      <span className={`material-icons ${styles.menuIcon}`} onMouseEnter={hoverOpen}>menu</span>
      <div className={styles.menuContainer} onMouseLeave={hoverClose}>
        <a>Home</a>
        <a>About Me</a>
        <a href="https://github.com/chapmanm3" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com/in/matt-chapman1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a>Other Bullet lol</a>
      </div>
    </div>
  );
}

export default NavBar
