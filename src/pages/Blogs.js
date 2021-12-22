import * as React from "react";
import Article from '../components/ArticleHeader'
import MyNav from '../components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'



const Blogs = ({articles, loading}) => {
  if(loading) {
    return <h2>Currently Still Loading..</h2>
  }
  
  const populateArticles = articles.map((article) => {
    return <Article key={article.page} page={'/' + article.page} title={article.title} content={article.content.slice(0, 300) + ' ...'}></Article>
  })

  return (
    <div>
      
      {populateArticles}
    </div>
  
  )
}

export default Blogs

