import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/HomePage.module.scss'
import AboutMe from '../components/AboutMe/AboutMe'

const HomePage: NextPage = () => {

  return (
    <div className={styles.page}>
      <Head>
        <title>Matt Chapmans&apos;s personal site</title>
      </Head>
      <AboutMe />
    </div>
  )
}

export default HomePage
