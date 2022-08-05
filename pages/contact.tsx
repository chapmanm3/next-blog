import type { NextPage } from 'next'
import styles from '../styles/Contact.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Head from 'next/head'

const ContactPage: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Matt Chapmans&apos;s personal site contact form</title>
        <meta name="description" content="My personal contact me form which you can fill out if you would like to reach me.">
      </Head>
      <ContactForm />
    </div>
  )
}

export default ContactPage
