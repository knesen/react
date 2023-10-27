import React from 'react'

const BottomRow = () => {
    return (
        <div className="bottom-row">
            <nav className="navigation">
                <a className="active" href="index.html">Home</a>
                <a href="service.html">Service</a>
                <a href="news.html">News</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a href="login.html" className="rounded-button orange-button">Login
                <i className="fa-solid fa-arrow-up-right"></i>
            </a>
        </div>
    )
}

export default BottomRow

