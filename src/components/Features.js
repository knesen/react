import React from 'react'

const Features = () => {
  return (
    <section class="features">
        <div class="container">
            <div class="features-left">
                <p class="red-tag">Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <button class="rounded-button orange-button">Learn more</button>
            </div>
            <div class="features-right">
                <div>
                    <i class="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i class="fa-light fa-lightbulb-exclamation-on"></i>
                    <h3>Startup Business</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i class="fa-sharp fa-light fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial Advice</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i class="fa-sharp fa-light fa-folder-gear"></i>
                    <h3>Risk Management</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features