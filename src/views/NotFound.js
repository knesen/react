import React from 'react'
import Header from '../components/HeaderSection/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="page-not-found container">
        <h1>404 Page Not Found</h1>

        <Link to="/">
          <button className="rounded-button orange-button">
            Go back to the home page
            <i className="fa-light fa-arrow-up-right"></i>
          </button>
        </Link>
        
      </div>
      <Footer />
    </div>
  )
}

export default NotFound