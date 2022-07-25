import React from 'react'
import profilePic from '../../public/profile.jpg'
import Image from 'next/image'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Hi my names Matt and I'm a Full Stack / Web Developer from the Boston
        area. I specialize in Javascript with React as my framework of choice at the moment
        I'm currently open to full time and contract opportunities so please
        reachout if you'd like to work with me</p>
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
