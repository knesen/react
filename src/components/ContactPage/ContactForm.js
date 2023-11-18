import { useFormik} from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'


const ContactForm = () => {

    const emailRegEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const nameRegEx = new RegExp(/^[a-zA-Z]+$/)

    const [errorMessage, setErrorMessage] = useState('')
    const [messageSent, setMessageSent] = useState(false)

    
    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        // Form validation
        validationSchema: Yup.object( { 
            name: Yup.string()
            .required("You must submit a name")
            .matches(nameRegEx, "Your name can only include letters")
            .min(2, "Your name must include at least two characters")
            .max(30, "Your name cannot include more than 30 characters"),

            email: Yup.string()
            .required("You must submit an e-mail address")
            .matches(emailRegEx, "You must submit a valid e-mail address"),

            message: Yup.string()
            .required("You must submit a message")
            .min(10, "Your message must include at least 10 characters")
            .max(300, "Your message cannot be longer than 300 characters")
        }),

        onSubmit: async (values) => {

            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            // eslint-disable-next-line default-case
            switch (result.status) {
                case 200:
                    setErrorMessage('') 
                    setMessageSent(true)                
                    break;
                case 400:
                    setErrorMessage('Something went wrong')
                    break;              
            }
        }
    })



    return (
        <section className="contact-background">

            
                
                {messageSent ? <div className="form-background"><h2>Your message has been sent.</h2></div> : 
                    <div className="form-background container">
                <h2>Leave us a message for any information.</h2>
                <form onSubmit={form.handleSubmit} noValidate>

                    <p className="errorMessage">{errorMessage}</p>

                    <input className="input-default" type="text" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                    <div className="errorMessage">{form.errors.name && form.touched.name ? form.errors.name : ''}</div>
                    
                    <input className="input-default" type="text" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                    <div className="errorMessage">{form.errors.email && form.touched.email ? form.errors.email : ''}</div>
                    
                    <textarea className="input-default input-large" type="text" placeholder="Your Message*" name="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
                    <div className="errorMessage">{form.errors.message && form.touched.message ? form.errors.message : ''}</div>
                    
                    <button type="submit" className="rounded-button orange-button">
                        Send Message
                        <i className="fa-light fa-arrow-up-right"></i>
                    </button>

                </form>
            </div>}            
            
        </section>
    )
}

export default ContactForm