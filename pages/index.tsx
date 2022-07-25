import type { NextPage } from 'next'
import styles from '../styles/HomePage.module.css'
import AboutMe from '../components/AboutMe/AboutMe'

const HomePage: NextPage = () => {

  return (
    <div className={styles.page}>
      <AboutMe />
    </div>
  )
}

export default HomePage
