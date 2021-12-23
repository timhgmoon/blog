import * as React from 'react';
import { Link } from 'gatsby';
import ContactForm from './ContactForm';
import { Right, Title, LcLink } from './lcLayout.module.css';
import styled from 'styled-components';

const LCLayout = ({title, link, linkText, children}) => {
  const StyledLink = styled(Link) `
    text-decoration: none;
    font-weight: bolder;
    color: #7b3d29;
    border-bottom-style: solid;
    border-bottom-color: #7b3d29;
    border-bottom-width: 1px;
  `;

  return (
    <div>
      <title>{title}</title>
      <main>
        <h1 className={Title}>{title}</h1>
        <p className={Right}><a className={LcLink} href={link} target="_blank" rel="noreferrer">{linkText}</a></p>
        {children}
        <p>Thank you for reading!</p>
        <ContactForm></ContactForm>
        <StyledLink to="/">Back to Home</StyledLink>
      </main>
    </div>
  )
}

export default LCLayout