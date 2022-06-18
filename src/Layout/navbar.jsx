import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/contact">Link Contact</Link>
        <Link to="/about">Link About</Link>
        <Link to="/login">Link Login</Link> 
        <div className="nav">
        <div className="one">
            <a href="/contact">Contact</a>
        </div>
        <div className="two">
            <a href="/about">About</a>
        </div>
        <div className="three">
            <a href="/login">Login</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar