import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
    <div className="empty-box"></div>
      <header className="header-container">
        <div>
          <h1>
            <span>{props.title1} <br/>{props.title2}</span>
          </h1>
          <h3>{props.subtitle}<span><Link className="here-link" to="/about">{props.link}</Link></span></h3>
          <hr/>
        </div>
        <div>
          <img src={props.image} height="550" width="800" alt="something" />
        </div>
      </header>
    </div>
  );
};

export default Header;
