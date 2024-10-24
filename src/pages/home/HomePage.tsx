import React from 'react'
import Header from '../../shared/header/Header'
import AboutUs from '@/shared/aboutUs/AboutUs'
import Portfolio from '@/shared/portfolio/Portfolio'
import Services from '@/shared/services/Services'
import ContactUs from '@/shared/contact/ContactUs'
import News from '@/shared/news/News'
import Footer from '@/shared/footer/Footer'

const HomePage = () => {
  return (
    <div>
   
        <AboutUs />
        <Portfolio />
        <Services />
        <ContactUs />
        <News />
        <Footer />
    </div>
  )
}

export default HomePage