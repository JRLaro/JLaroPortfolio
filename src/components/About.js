import React from "react";
import resume from "../Resume/j.LaroResume.pdf";

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
            <p className="text-white">
              My name is Jose Laro, and I am an inspiring Full-Stack Developer.
              I have just completed the University of Central Florida's
              FullStack Development BootCamp and I am now looking to implement
              and utilize my newfound skills for a company that is wanting a
              creative perspective. As a freelance graphic designer I have
              always had a passion for creating, constructing and collaborating.
              There is nothing more satisfying than taking a conceptual idea drawn on a
              napkin and turning it into reality, whether that be a fully functional Web
              application or graphic design. This is the reason I chose to explore and
              take on this adventure. With the incorporation of my
              knowledge in Adobe Illustrator, PhotoShop, AfterEffect as well as
              Lightroom I am an asset. My approach 
              to life is - "Although the destination
              is important, the journey needs to be an unforgettable
              experience."
            </p>
          </div>
          <a href="https://github.com/JRLaro" target="_blank">
            <button id="gitHub" type="button" class="btn btn-dark mt-3 mb-3">
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/jlaro/" target="_blank">
            <button id="gitHub" type="button" class="btn btn-info mt-3 mb-3">
              Linkedin
            </button>
          </a>
          <a href={resume} target="_blank">
            <button id="gitHub" type="button" class="btn btn-warning mt-3 mb-3">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
