import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-container">
        <aside>
            <Link to="/">© 2020 Pavlina Zafeiri</Link>
        </aside>
        <aside className="links">
          <a href="https://github.com/Pavlitsa">Github</a>
          <a href="https://github.com/Pavlitsa">LinkedIn</a>
        </aside>
      </section>
    </div>
  );
};

export default Footer;
