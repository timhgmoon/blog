import * as React from 'react'
import ContactForm from '../components/ContactForm'
import MyNav from '../components/myNav'
import { container } from '../components/index.module.css'
const Contact = () => {
  return (
    <main>
      <title>Contact Me</title>
      <MyNav></MyNav>
      <div className={container}>
        <ContactForm></ContactForm>
      </div>
    </main>
  )
}

export default Contact