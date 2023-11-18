import React from 'react'
import Header from '../components/HeaderSection/Header'


import Footer from '../components/Footer'
import ContactSubHeader from '../components/ContactPage/ContactSubHeader'
import ContactBoxes from '../components/ContactPage/ContactBoxes'
import ContactForm from '../components/ContactPage/ContactForm'
import Map from '../components/ContactPage/Map'

const Contact = () => {
    return (
        <body>
            <Header />
            <ContactSubHeader />
            <ContactBoxes />
            <ContactForm />
            <Map />
            <Footer />
        </body>
    )
}

export default Contact