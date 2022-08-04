import React, { useState } from 'react'
import styles from './ContactForm.module.scss'
import axios from 'axios'

const ContactForm = () => {

  const [ formSuccess, setFormSuccess ] = useState(false)
  const [ formFailure, setFormFailure ] = useState(false)
  const [ name, setName ] = useState<string>('')
  const [ email, setEmail ] = useState<string>('')
  const [ message, setMessage ] = useState<string>('')

  const nameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const emailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const messageChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value)
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const formData = {
      name,
      email,
      message
    }
    const endPoint = '/api/contactForm'
    axios.post(endPoint, formData)
      .then(() => setFormSuccess(true))
      .catch(() => setFormFailure(true))
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label> 
        <input onChange={nameChange} type="text" id="name" name="name" required minLength={2} />
        <label htmlFor="email">Email</label>
        <input onChange={emailChange} type="email" id="email" name="email" required />
        <label htmlFor="message">Say Hi</label>
        <textarea onChange={messageChange} name="message" rows={10} />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {formSuccess && <p>Success!</p>}
      {formFailure && <p>Form submission failed</p>}
    </div>
  )
}

export default ContactForm
