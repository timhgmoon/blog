import * as React from 'react';
import { Link } from 'gatsby';
import Nav from './MyNav';
import ContactForm from './ContactForm'
import { Right, Title, LcLink } from './lcLayout.module.css';
const LCLayout = ({title, link, linkText, children}) => {
  return (
    <div>
      <title>{title}</title>
      <main>
        <h1 className={Title}>{title}</h1>
        <p className={Right}><a className={LcLink} href={link}>{linkText}</a></p>
        {children}
        <p>Thank you for reading!</p>
        <ContactForm></ContactForm>
        <Link to="/">Back to Home</Link>
      </main>
    </div>
  )
}

export default LCLayout