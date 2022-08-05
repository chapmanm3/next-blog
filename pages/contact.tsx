import type { NextPage } from 'next'
import styles from '../styles/Contact.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Head from 'next/head'

const ContactPage: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Matt Chapmans&apos;s personal site contact form</title>
      </Head>
      <ContactForm />
    </div>
  )
}

export default ContactPage
