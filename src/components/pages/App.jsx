import React, { useEffect } from 'react'

import Navbar from '../templates/navbar'
import Hero from '../templates/heroSection'
import About from '../templates/aboutSection'
import Cursor from '@/UI/elements/Cursor'
import WorkSection from '../templates/workSection'
import ContactSection from '../templates/contactSection'
import Footer from '../templates/footer'


export default function App(){
        return(
            <>
                <Navbar />
                <Hero />
                <About />
                <WorkSection />
                <ContactSection />
                <Footer />

                <Cursor />
            </>
        )
}


