import React from 'react'
import Header from '../components/HeaderSection/Header'
import NewsSubHeader from '../components/News/NewsSubHeader'
import Footer from '../components/Footer'
import NewsSection from '../components/News/NewsSection'

const News = () => {
  return (
    <div>
        <Header />
        <NewsSubHeader />
        <NewsSection />   
        <Footer />

    </div>
  )
}

export default News