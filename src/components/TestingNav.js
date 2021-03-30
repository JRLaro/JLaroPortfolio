import React from 'react'
import avatar from '../images/profilePic.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Cool dude"/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                    {`© Copyright ${year}`}  J.Laro
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
