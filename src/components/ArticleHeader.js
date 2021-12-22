import * as React from "react"
import { Link } from 'gatsby'



const ArticleHeader = ({page, title, content} ) => {
  return (
   <article className="article-page">
     <Link to={page}>
      <h2>{title}</h2>
     </Link>
     <p>{content}</p>
   </article>

  )
}

export default ArticleHeader
