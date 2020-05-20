import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Navbar as NavBar, Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="nav-container">
    <div>
      <img className="logo-img" alt="logo" src="logo3.png"></img>
    </div>
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/projects">Projects</Link>
      </div>

      {/* <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link> */}
    </div>
  );
};

export default Navbar;
