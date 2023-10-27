import React from 'react'
import img_man_with_tablet from '../assets/images/showcase-image.svg'
import img_swirly_background_lines from '../assets/images/background-lines.svg'

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="showcase-left">
                    <div className="showcase-top">
                        <h1>We provide The Best business solutions</h1>
                        <div>Establish your vision and value proposition and turn them into testable prototypes.</div>
                    </div>
                    <div className="showcase-bottom">
                        <button className="rounded-button orange-button">
                            Get Consulting
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                        <button className="rounded-button">
                            Learn More
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
                <img id="man-with-tablet" src={img_man_with_tablet} alt="man looking at tablet while pondering" />
            </div>
            <img id="swirly-background-lines" src={img_swirly_background_lines} alt="swirly background lines" />
        </section>
    )
}

export default Showcase