import React from 'react'
import Header from '../components/HeaderSection/Header'
import NewsSubHeader from '../components/News/NewsSubHeader'
import Footer from '../components/Footer'
import NewsSection from '../components/HomeNewsSection'
import TestNewsSection from '../components/TestNewsSection'

const News = () => {
  return (
    <div>
        <Header />
        <NewsSubHeader />
        <TestNewsSection />
        {/* <NewsSection /> */}
        <Footer />

    </div>
  )
}

export default News