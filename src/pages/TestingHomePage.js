import React from "react";
import * as faIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from "../images/jLaro.png"
function TestingHomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <img src={Logo} style={{width:"50%", justifyContent:"center"}}/>
        <h1 className="hero-text">
          Hi, I am
          <span> Jose Laro</span>
        </h1>
        <p className="h-sub-text">
          Web Developer | Graphic Designer
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/jlaro/" target="_blank" className="icon-holder">
            <faIcons.FaLinkedin className="icon ln" />
            </a>
          <Link to="https://github.com/JRLaro" target="_blank" className="icon-holder">
            <faIcons.FaGithub className="icon gh" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default TestingHomePage;
