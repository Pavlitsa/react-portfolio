import React from "react";
// import { Switch } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-container">
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
