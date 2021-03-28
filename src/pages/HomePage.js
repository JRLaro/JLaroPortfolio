import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'


function HomePage() {
    return (
        <div className="container">
            <Header />
            <About />
            <Projects />
        </div>
    )
}

export default HomePage