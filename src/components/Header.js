import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div>
          <h1>
            <span>
              Web Developer <br></br>Living in Munich.
            </span>
          </h1>
          <hr />
        </div>
        <div>
          <img src="mountains.jpg" height="500" width="800" alt="mountains" />
        </div>
      </header>
    </div>
  );
};

export default Header;
