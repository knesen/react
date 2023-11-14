import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/HeaderSection/Header'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'

const NewsDetails = () => {
  const [article, setArticle] = useState({})
  const params = useParams()
  const { articleID } = params.id

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    if (articleID !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleID}`)

      if (result.status === 200)
        setArticle = (await result.json())
    }
  }

  return (
    <div>
      <Header />
      <SubHeader />
      <h2>{ article.title }</h2>
      <div>{ article.category }</div>
      <div>{ article.author }</div>
      <div>{ article.published }</div>
      <div>{ article.content }</div>
      {/* Article */}
      <Footer />
    </div>
  )
}

export default NewsDetails