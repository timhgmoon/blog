import * as React from "react";
import Article from '../components/ArticleHeader'
import 'bootstrap/dist/css/bootstrap.min.css';



const Blogs = ({articles}) => {
  
  const populateArticles = articles && articles.map((article) => 
    <Article key={article.page} page={'/' + article.page} title={article.title} content={article.content.slice(0, 300) + ' ...'}></Article>
  )

  return (
    <div>
      
      {populateArticles}
    </div>
  
  )
}

export default Blogs

