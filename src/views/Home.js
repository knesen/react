import React from 'react'
import Header from '../components/HeaderSection/Header';
import Showcase from '../components/Showcase';
import Partners from '../components/Partners';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import TeamAndTestimonial from '../components/TeamAndTestimonial/TeamAndTestimonial';
import NewsSection from '../components/News/NewsSection';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Showcase />
            <Partners />
            <Features />
            <About />
            <Services />
            <WhyChooseUs />
            <Projects />
            <TeamAndTestimonial />
            <NewsSection />
            <Signup />
            <Footer />

        </div>
    )
}

export default Home