import React from 'react'
import img_why_choose_us from '../assets/images/why-choose-us-image.jpg'

const WhyChooseUs = () => {
  return (
    <section class="why-choose-us">
        <div class="container">
            <div class="background"></div>
            <div class="why-choose-us-left">
                <p class="red-tag">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div class="why-choose-us-item">
                    <i class="fa-sharp fa-light fa-thumbs-up"></i>
                    <div>
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="why-choose-us-item">
                    <i class="fa-sharp fa-regular fa-jet-fighter"></i>
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="why-choose-us-item">
                    <i class="fa-sharp fa-regular fa-pen-nib"></i>
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="why-choose-us-item">
                    <i class="fa-light fa-head-side-gear"></i>
                    <div>
                        <h3>Artificial Intelligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div class="why-choose-us-right">
                <img src={img_why_choose_us} alt="Two women having a discussion"/>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs