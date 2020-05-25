import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import { Navbar as NavBar, Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="nav-container">
    <div>
      <h3 className="name-logo" to="/">Pavlina Zafeiri</h3>
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
