import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <Link className="name-logo" to="/">
          Pavlina Zafeiri
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
