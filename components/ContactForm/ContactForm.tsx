import React, { useState } from 'react'
import styles from './ContactForm.module.scss'
import axios from 'axios'

const ContactForm = () => {

  const [ formSuccess, setFormSuccess ] = useState(false)
  const [ formFailure, setFormFailure ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
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
        <input type="text" id="name" name="name" required minLength={2} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Say Hi</label>
        <textarea name="message" rows={10} />
        <button type="submit">Submit</button>
      </form>
      {formSuccess && <p>Success!</p>}
      {formFailure && <p>Form submission failed</p>}
    </div>
  )
}

export default ContactForm
