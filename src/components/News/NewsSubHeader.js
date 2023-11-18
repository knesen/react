import React from 'react'
import img_background_lines from '../../assets/images/background-lines.svg'
import { Link } from 'react-router-dom'

const NewsSubHeader = () => {
    return (
        <section className="sub-header">
            <div className="container">
                <nav className="sub-header-navigation">
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </nav>
                <h2>Let's Connect</h2>
            </div>
            <img src={img_background_lines} alt="swirly background lines" />
        </section>
    )
}

export default NewsSubHeader