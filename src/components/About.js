import React from 'react'
import resume from "../Resume/j.LaroResume.pdf"

function About() {
    return (
        <div className="about-wrapper" id="about">
            <div className="about-info text-center">
                <h1> ABOUT </h1>
                <div className="col">
            {/* <img
              id="profilePic"
              style={img}
              className="img-responsive float-left mr-2 mb-1"
              width="200"
              height="200"
              src={profile}
              alt="one good looking fella"
            /> */}
          </div>
          <div className="col-sm-12">
            <div className="col">
              <p>
                My name is Joseph Laro, and I am an inspiring Full-Stack
                Developer. I am currently enrolled in the University of Central
                Florida's BootCamp program. As a freelance graphic designer I
                have always had a passion for creating, constructing and
                collaborating. There is nothing more satisfying than creating something out of nothing. Having the ability to take a conceptual idea drawn on a napkin and turning it into reality with a fully functional Web/Mobile application is the reason I chose to explore and take on this adventure that is Web-development. Incorporating my knowledge of Adobe Illustrator, PhotoShop, AfterEffect as well as Lightroom is certainly something I take advantage of. My philosophy and perspective in life is -
                "Although the destination is important, the journey needs to be
                an unforgettable experience."
              </p>
            </div>
            <a href="https://github.com/JRLaro" target="_blank">
              <button id="gitHub" type="button" class="btn btn-dark mt-3 mb-3">
                GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jlaro/"
              target="_blank"
            >
              <button id="gitHub" type="button" class="btn btn-info mt-3 mb-3">
  
                Linkedin
              </button>
            </a>
            <a href={resume} target="_blank">
              <button
                id="gitHub"
                type="button"
                class="btn btn-warning mt-3 mb-3"
              >
 
                Resume
              </button>
            </a>
          </div>
            </div>
        </div>
    )
}

export default About
