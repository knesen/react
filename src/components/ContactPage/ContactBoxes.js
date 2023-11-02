import React from 'react'

const ContactBoxes = () => {
  return (
    <section className="contact-background">
                <div className="contact-boxes">
                    <div className="container">
                        <div className="contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <strong>Visit us</strong>
                                <p>
                                    Sveavägen 31
                                    <br />
                                    111 34 Stockholm
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <strong>Call us</strong>
                                <p>
                                    +46 (8) 121 470 50
                                    <br />
                                    +46 (8) 121 470 51
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <strong>Email us</strong>
                                <p>
                                    info@crito.com
                                    <br />
                                    support@crito.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
  )
}

export default ContactBoxes