import React, { useState } from 'react'
import styles from './dropdown.module.scss'

interface DropDownProps {
  title: string
  body?: string
  children?: React.ReactNode
}

const DropDown = ({ title, body, children, ...props }: DropDownProps) => {
  const [ open, setOpen ] = useState<boolean>(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.titleCard} onClick={clickHandler}>
        <h3 className={styles.titleTextContainer}>
          {title}      
        </h3>
      </div>
      {body && open &&
      <p className={styles.bodyContainer}>{body}</p>}
      {children && open &&
      children}
    </div>
  )
}

export default DropDown
