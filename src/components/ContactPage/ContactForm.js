import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-background">               

                <div className="form-background container">
                    <h2>Leave us a message for any information.</h2>
                    <form id="send-message" method="post">
                        <input className="input-default" type="text" placeholder="Name*" id="name" name="name" />
                        <input className="input-default" type="text" placeholder="Email*" id="email" name="email" />
                        <textarea className="input-default input-large" type="text" placeholder="Your Message*" id="message"
                                    name="message"></textarea>
                        <button type="submit" className="rounded-button orange-button">
                            Send Message
                            <i className="fa-light fa-arrow-up-right"></i>
                        </button>
                    </form>
                </div>
            </section>
  )
}

export default ContactForm