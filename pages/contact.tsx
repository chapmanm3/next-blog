import type { NextPage } from 'next'
import styles from '../styles/Contact.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'

const ContactPage: NextPage = () => {
  return (
    <div className={styles.page}>
      <ContactForm />
    </div>
  )
}

export default ContactPage
