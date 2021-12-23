import * as React from "react";
import logo from "../images/icon.png"
import MyNav from '../components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react'
import articlesData from '../components/articleData';
import Paginate from '../components/Paginate.js'
import Blogs from './Blogs';
import { container, title} from '../components/index.module.css';


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
     <link rel="icon" href={logo} type="image/x-icon"/>
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

        {/* Add contact information */}
        {/* <Contact></Contact> */}
      </div>
  
   </main>
  
  )
}

export default IndexPage
