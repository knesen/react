import React, { useEffect, useState } from 'react'

import img_news_1 from '../assets/images/news-1.jpg'
import img_news_2 from '../assets/images/news-2.jpg'
import img_news_3 from '../assets/images/news-3.jpg'



import { Link } from 'react-router-dom'


const News = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
    console.log("Running")
    console.log(articles)

  }, [])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    setArticles(await result.json())
  }
  return (
    <section className="news container">
      <div className="red-tag">Article & News</div>
      <div className="news-title">
        <h2>Get Every Single Articles & News</h2>
        <button className="rounded-button">
          Browse Articles
          <i className="fa-light fa-arrow-up-right"></i>
        </button>
      </div>
      <div className="news-articles">
        {
          articles.map((article, index) => (
            <Link to={`/newsDetails/$(article.id)`} className="news-item" key={article.id}>
              <div className="date-box">
                {/* <strong>25</strong> */}
                <strong>{article.published.substring(0, 10)}</strong>
              </div>
              <img src={article.imageUrl} alt="Article image" />

              <p className="news-category">{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </Link>
          ))
        }

      </div>
      <div className="gallery-icon">
        <i className="fa-sharp fa-solid fa-circle-small gallery-current"></i>
        <i className="fa-sharp fa-solid fa-circle-small"></i>
        <i className="fa-sharp fa-solid fa-circle-small"></i>
        <i className="fa-sharp fa-solid fa-circle-small"></i>
        <i className="fa-sharp fa-solid fa-circle-small"></i>
      </div>
    </section>
  )
}

export default News