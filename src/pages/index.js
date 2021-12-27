import * as React from "react";
import MyNav from './myNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react'
import articlesData from '../components/articleData';
import Paginate from '../components/Paginate.js'
import Blogs from './blogs';
import { container, title} from '../components/index.module.css';


const IndexPage = () => {
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState(1)
  const articlesPerPage = 5

  useEffect (() => {
    setArticles(articlesData);
  },[]);
  
  const lastArticle = currentArticle * articlesPerPage
  const firstArticle = lastArticle - articlesPerPage
  const currentArticles = articles.slice(firstArticle, lastArticle)

  const pag = (pageNum) => {
    setCurrentArticle(pageNum)
  }
  return (
   <main>
      <title>
        Tim's Blog
      </title>
      
      <MyNav></MyNav>
      <div className= {container}>
        <h1 className={title}>Blog Posts</h1>
        {/* Gets List of Blogs posts */}
        <Blogs articles= {currentArticles}></Blogs>

        {/* Add pagination instead of listing all the blogs all at once */}
        <Paginate articlesPerPage={articlesPerPage} total={articles.length} pag={pag}></Paginate>
      </div>
  
   </main>
  
  )
}

export default IndexPage
