import React from "react";
import Logo from "../images/jLaroWhite.png";
import * as cgIcons from "react-icons/cg";

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img className="logo" src={Logo} alt="Logo..." /> </a>
    <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <cgIcons.CgMenuMotion style={{ color: "white"}}/>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>

    )
}


