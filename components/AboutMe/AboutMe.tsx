import React from 'react'
import profilePic from '../../public/profile.jpg'
import Image from 'next/image'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Hi this is a quick blurb about me</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={profilePic}
          alt="Headshot of me"
        />
      </div>
    </div>
  )
}

export default AboutMe
