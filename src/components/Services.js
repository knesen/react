import React from 'react'
import background_lines_right from '../assets/images/background-lines-right.svg'

const Services = () => {
  return (
    <section className="our-services">
        <img src={background_lines_right} alt="background lines" />
        <div className="services-top">
            <div className="red-tag">Our Services</div>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>

        <div className="services-middle">
            <div className="services-item">
                <i className="fa-light fa-horizontal-rule"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div className="services-button-space">
                    <button className="circle-button black-button">
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="services-item">
                <i className="fa-light fa-horizontal-rule"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div className="services-button-space">
                    <button className="circle-button black-button">
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="services-item">
                <i className="fa-light fa-horizontal-rule"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>

                <div className="services-button-space">
                    <button className="circle-button black-button">
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="services-item">
                <i className="fa-light fa-horizontal-rule"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div className="services-button-space">
                    <button className="circle-button black-button">
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
        <div className="services-bottom">
            <button className="rounded-button">
                Browse Services
                <i className="fa-light fa-arrow-up-right"></i>
            </button>
        </div>
    </section>
  )
}

export default Services