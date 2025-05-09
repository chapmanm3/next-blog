import { Metadata } from "next";
import styles from '../styles/HomePage.module.scss'
import AboutMe from "../components/AboutMe/AboutMe";


export const metadata: Metadata = {
  title: "Matt Chapman's personal site",
  description: "The personal site for Matt Chapman a web developer from Boston, MA."
}

export default async function IndexPage() {
  return (
    <div className={styles.page}>
      <AboutMe />
    </div>
  )
}
