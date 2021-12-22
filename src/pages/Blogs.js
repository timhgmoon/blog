import * as React from "react";
import Article from '../components/ArticleHeader'
import MyNav from '../components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'



const Blogs = ({articles}) => {
  
  const populateArticles = articles.map((article) => {
    return <Article key={article.page} page={'/' + article.page} title={article.title} content={article.content}></Article>
  })

  return (
    <div>
      {/* <Article page="/1" title="First post" content={content[0]}></Article> */}
      {populateArticles}
    </div>
  
  )
}

export default Blogs

