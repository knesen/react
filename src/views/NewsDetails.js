import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/HeaderSection/Header'
import NewsSubHeader from '../components/News/NewsSubHeader'
import Footer from '../components/Footer'


const NewsDetails = () => {
  const [article, setArticle] = useState({})
  const { id } = useParams()


  useEffect(() => {
    getArticle()

  }, [])

  const getArticle = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/` + id)

      if (result.status === 200)
        setArticle(await result.json())
    }
  }


  return (
    <div>

      <Header />
      <NewsSubHeader />
      <div>


        <div className="article container">
          <h2>{article.title}</h2>
          <div className="article-details">
            <div>{article.published?.substring(0, 10)}</div>
            <div className="spacer"></div>
            <div>{article.category}</div>
            <div className="spacer"></div>
            <div>{article.author}</div>
          </div>
          <img src={article.imageUrl} alt="Article" />
          <p>{article.content}</p>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default NewsDetails