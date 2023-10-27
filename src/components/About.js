import React from 'react'
import img_founder from '../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import img_swirly_lines from '../assets/images/background-wavy-lines.svg'

const About = () => {
  return (
    <section class="about container">
    <div class="about-image container" style={{backgroundImage: `url(${img_founder})`}}>
        <img class="swirly-lines" alt="swirly lines" src={img_swirly_lines} />
        <div class="about-quote">
            <div class="about-quote-top">
                <div class="founder-name">Samantha Brown, </div>
                <div class="red-tag"> Founder</div>
            </div>
            <div class="about-quote-bottom">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</div>
        </div>
    </div>
    <div class="about-company">
        <p class="red-tag">About Company</p>
        <h2>We Are Business Consulting & Credit Repair Experts</h2>
        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
            esse
            obcaecati? Ex esse error voluptates iure vel totam eos.
        </div>
        <br />
        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
            adipisci accusantium
            libero provident voluptate amet.
        </div>
        <div class="about-buttons">
            <button class="rounded-button black-button">
                Learn More
                <i class="fa-solid fa-arrow-up-right"></i>
            </button>

            <a href="@" class="play-video">
                <button class="circle-button fa-solid fa-play"></button>
                <div>Intro Video</div>
            </a>
        </div>
    </div>
</section>
  )
}

export default About