import * as React from "react";
import MyNav from '../components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react'
import articlesData from '../components/articleData';
import Paginate from '../components/Paginate.js'
import Blogs from './Blogs';
import Contact from '../components/Contact';

const IndexPage = () => {
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState(1)
  const articlesPerPage = 4

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
      <h1>Blog Posts</h1>
      {/* Gets List of Blogs posts */}
      <Blogs articles= {currentArticles}></Blogs>

      {/* Add pagination instead of listing all the blogs all at once */}
      <Paginate articlesPerPage={articlesPerPage} total={articles.length} pag={pag}></Paginate>

      {/* Add contact information */}
      <Contact></Contact>
   </main>
  
  )
}

export default IndexPage
