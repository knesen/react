import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        console.log("Running")
        
       
    }, [])

const getArticles = async () => {
const result = await fetch ('https://win23-assignment.azurewebsites.net/api/articles')
setArticles(await result.json())
}
  return (
    <div>
        {
            articles.map(article => (
                <Link to="@">
                <div className="date-box">
                    <strong>25</strong>
                    <p>Mar</p>
                </div>                
                <div className="news-item" key="{article.id}">
                    <p className="news-category">{article.author}</p>
                    <h3>{article.title}</h3>
                </div>
                </Link>
            )
            )
        }

    </div>
  )
}

export default ArticleList