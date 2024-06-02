import React from 'react'
import profilePic from '../../public/profile.png'
import Image from 'next/image'
import styles from './AboutMe.module.scss'

const AboutMe = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Hi my name is Matt and I&lsquo;m a Full Stack / Web Developer in the Fort Worth
          area. I specialize in Javascript with React as my framework of choice at the moment.
          I&lsquo;m currently open to full time and contract opportunities so please
          reach out using the Contact Me link in the navigation menu if you&lsquo;d like to chat!</p>
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
