import React from 'react'
import background_lines_right from '../assets/images/background-lines-right.svg'

const Services = () => {
  return (
    <section class="our-services">
        <img src={background_lines_right} alt="background lines" />
        <div class="services-top">
            <div class="red-tag">Our Services</div>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>

        <div class="services-middle">
            <div class="services-item">
                <i class="fa-light fa-horizontal-rule"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div class="services-button-space">
                    <button class="circle-button black-button">
                        <i class="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div class="services-item">
                <i class="fa-light fa-horizontal-rule"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div class="services-button-space">
                    <button class="circle-button black-button">
                        <i class="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div class="services-item">
                <i class="fa-light fa-horizontal-rule"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>

                <div class="services-button-space">
                    <button class="circle-button black-button">
                        <i class="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div class="services-item">
                <i class="fa-light fa-horizontal-rule"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div class="services-button-space">
                    <button class="circle-button black-button">
                        <i class="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
        <div class="services-bottom">
            <button class="rounded-button">
                Browse Services
                <i class="fa-light fa-arrow-up-right"></i>
            </button>
        </div>
    </section>
  )
}

export default Services