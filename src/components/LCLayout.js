import * as React from 'react'
import { Link } from 'gatsby'
import Nav from './MyNav'
const LCLayout = ({title, link, linkText, children}) => {
  return (
    <div>
      <title>{title}</title>
      <Nav></Nav>
      <main>
        <h1>{title}</h1>
        <h2 className="lc-link"><a href={link}>{linkText}</a></h2>
        {children}
        <Link to="/">Back to Home</Link>
      </main>
    </div>
  )
}

export default LCLayout