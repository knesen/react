import React from 'react'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="features-left">
                <p className="red-tag">Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <button className="rounded-button orange-button">Learn more</button>
            </div>
            <div className="features-right">
                <div>
                    <i className="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i className="fa-light fa-lightbulb-exclamation-on"></i>
                    <h3>Startup Business</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i className="fa-sharp fa-light fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial Advice</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                    <i className="fa-sharp fa-light fa-folder-gear"></i>
                    <h3>Risk Management</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features