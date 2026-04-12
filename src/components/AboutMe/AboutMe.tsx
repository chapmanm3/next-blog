import React from 'react'
import profilePic from '../../../public/profile.png'
import Image from 'next/image'
import styles from './AboutMe.module.scss'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Matt Chapman</h1>
          <p>
            Full Stack Developer based in the Boston area. I specialize in JavaScript and React, 
            building performant web applications that solve real problems. Currently open to 
            full-time and contract opportunities.
          </p>
          <div className={styles.cta}>
            <Link href="/blog" className={styles.ctaPrimary}>Read my blog</Link>
            <Link href="/resume" className={styles.ctaSecondary}>View resume</Link>
            <a href="mailto:mattchapmantech@gmail.com" className={styles.ctaSecondary}>Get in touch</a>
          </div>
          <div className={styles.techStack}>
            <p>Technologies I work with</p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={profilePic}
              alt="Matt Chapman"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
