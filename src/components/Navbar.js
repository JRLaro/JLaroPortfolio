import React from "react";
import avatar from "../images/profilePic.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="Cool dude" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active" className="nav-name">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              exact
              activeClassName="active"
              className="nav-name"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolios"
              exact
              activeClassName="active"
              className="nav-name"
            >
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              exact
              activeClassName="active"
              className="nav-name"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>{`© Copyright ${year}`} J.Laro</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
