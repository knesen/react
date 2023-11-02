import React from 'react'
import Header from '../components/HeaderSection/Header'


import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import ContactBoxes from '../components/ContactPage/ContactBoxes'
import ContactForm from '../components/ContactPage/ContactForm'
import Map from '../components/ContactPage/Map'

const Contact = () => {
    return (
        <body>
            <Header />
            <SubHeader />
            <ContactBoxes />
            <ContactForm />
            <Map />
            <Footer />
        </body>
    )
}

export default Contact