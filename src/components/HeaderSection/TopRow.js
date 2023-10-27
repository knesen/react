import React from 'react'
import '../../App.css'

const TopRow = () => {
    return (
        <div className="header-menu">
            <div className="top-row">
                <div className="contact">
                    <div>
                        <i className="fa-light fa-phone"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div>
                        <i className="fa-light fa-envelope"></i>
                        info@crito.com
                    </div>

                    <div className="contact-last">
                        <i className="fa-light fa-location-dot"></i>
                        Sveavägen 31, 111 34 Stockholm
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default TopRow