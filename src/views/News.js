import React from 'react'
import Header from '../components/HeaderSection/Header'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'
import NewsSection from '../components/NewsSection'
import TestNewsSection from '../components/TestNewsSection'

const News = () => {
  return (
    <div>
        <Header />
        <SubHeader />
        <TestNewsSection />
        {/* <NewsSection /> */}
        <Footer />

    </div>
  )
}

export default News