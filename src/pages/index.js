import * as React from "react";
import Article from '../components/ArticleHeader';
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
  const articlesPerPage = 3

  useEffect (() => {
    setArticles(articlesData);
  },[]);
  
  const lastArticle = currentArticle * articlesPerPage
  const firstArticle = lastArticle - articlesPerPage
  let currentArticles = []
  currentArticles = articles.slice(firstArticle, lastArticle)

  const pag = (pageNum) => {
    setCurrentArticle(pageNum)
  }
  return (
   <main>
      <title>
        Tim's Blog
      </title>
      <MyNav></MyNav>
      <h1>Articles</h1>
      <Blogs articles= {currentArticles}></Blogs>

      <Paginate articlesPerPage={articlesPerPage} total={articles.length} pag={pag}></Paginate>
      <Contact></Contact>
   </main>
  
  )
}

export default IndexPage
