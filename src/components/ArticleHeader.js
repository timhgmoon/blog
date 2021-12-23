import * as React from "react"
import { Link } from 'gatsby'
import { ArticlePage, TextContent, Title } from './articleHeader.module.css'
import styled from 'styled-components'


const ArticleHeader = ({page, title, content} ) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
      color: #7b3d29;
    }
  `;
  return (
   <article className={ArticlePage}>
     <StyledLink to={page}>
      <h2 className={Title}>{title}</h2>
     </StyledLink>
     <p className={TextContent}>{content}</p>
   </article>

  )
}

export default ArticleHeader
