import React from 'react'
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import About from '../components/About'
import Projects from '../components/Projects'


function HomePage() {
    return (
        <>
            <div className="container-fluid">
            <Navbar />
      </div>
            <Header />
            <About />
            <Projects />
            
            </>
    )
}

export default HomePage