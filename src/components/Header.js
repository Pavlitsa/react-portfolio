import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <header className="header-container">
        <div>
          <h1>
            <span>{props.title}</span>
          </h1>
          <hr />
        </div>
        <div>
          <img src={props.image} height="550" width="800" alt="something" />
        </div>
      </header>
    </div>
  );
};

export default Header;
