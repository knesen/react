import React from 'react'
import img_founder from '../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import img_swirly_lines from '../assets/images/background-wavy-lines.svg'

const About = () => {
  return (
    <section className="about container">
    <div className="about-image container" style={{backgroundImage: `url(${img_founder})`}}>
        <img className="swirly-lines" alt="swirly lines" src={img_swirly_lines} />
        <div className="about-quote">
            <div className="about-quote-top">
                <div className="founder-name">Samantha Brown, </div>
                <div className="red-tag"> Founder</div>
            </div>
            <div className="about-quote-bottom">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</div>
        </div>
    </div>
    <div className="about-company">
        <p className="red-tag">About Company</p>
        <h2>We Are Business Consulting & Credit Repair Experts</h2>
        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
            esse
            obcaecati? Ex esse error voluptates iure vel totam eos.
        </div>
        <br />
        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
            adipisci accusantium
            libero provident voluptate amet.
        </div>
        <div className="about-buttons">
            <button className="rounded-button black-button">
                Learn More
                <i className="fa-solid fa-arrow-up-right"></i>
            </button>

            <a href="@" className="play-video">
                <button className="circle-button fa-solid fa-play"></button>
                <div>Intro Video</div>
            </a>
        </div>
    </div>
</section>
  )
}

export default About