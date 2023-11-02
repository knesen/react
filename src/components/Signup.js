import React from 'react'
import img_background_lines_dark from '../assets/images/background-wavy-lines-dark.svg'

const Signup = () => {
  return (
    <section className="signup">
        <img src={img_background_lines_dark} alt="background lines" />
        <div className="container">
            <div className="signup-title">
                <h2>Get News Updates By Signup</h2>
            </div>
            <div className="signup-input">                
                <input type="email" placeholder="username@domain.com" />
                <button type="submit" className="rounded-button orange-button">
                    Subscribe
                    <i className="fa-light fa-arrow-up-right"></i>
                </button>

            </div>
        </div>
    </section>
  )
}

export default Signup