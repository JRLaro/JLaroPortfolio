import React from 'react'
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import About from '../components/About'
import Portfolio from '../components/Portfolio'



function HomePage() {
    return (
        <>
            <div className="container-fluid">
            <Navbar />
      </div>
            <Header />
            <About />
            {/* <Projects /> */}
            <Portfolio />
            </>
    )
}

export default HomePage