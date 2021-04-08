import React, { useEffect, useState, useRef } from "react";
import * as faIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from "../images/jLaroBlack.png";
import Parallax from "parallax-js";




function TestingHomePage() {
  useEffect(() => {
    var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
  }, [])

  return (
    <div className="HomePage">
      <header className="hero">
        
        <div id="scene">
          <img data-depth=".5" src={Logo} style={{ width: "30rem", display: "block", marginLeft: "auto", marginRight: "auto" }} />
        </div>
        
        <h1 className="hero-text">
          Hi, I am
           <Link to='/about' style={{textDecoration:"none"}}>
          <span> Jose Laro </span>
           </Link>
        </h1>
        <p className="h-sub-text">
          Web Developer | Graphic Designer
        </p>
        <div className="icons">
          <Link to="https://www.linkedin.com/in/jlaro/" target="_blank" className="icon-holder">
            <faIcons.FaLinkedin className="icon ln" />
            </Link>
          <Link to="https://github.com/JRLaro" target="_blank" className="icon-holder">
            <faIcons.FaGithub className="icon gh" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default TestingHomePage;
