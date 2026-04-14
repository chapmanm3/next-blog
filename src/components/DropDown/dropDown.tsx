"use client"

import React, { useState } from 'react'
import styles from './dropdown.module.scss'

interface DropDownProps {
  title: string
  body?: string
  children?: React.ReactNode
}

const DropDown = ({ title, body, children }: DropDownProps) => {
  const [ open, setOpen ] = useState<boolean>(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.dropDownContainer}>
      <button 
        className={styles.titleCard} 
        onClick={clickHandler}
        aria-expanded={open}
      >
        <h3 className={styles.titleTextContainer}>
          {title}      
        </h3>
        <svg 
          className={styles.chevron}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className={`${styles.content} ${open ? styles.open : ''}`}>
        {body && <p className={styles.bodyContainer}>{body}</p>}
        {children}
      </div>
    </div>
  )
}

export default DropDown
