import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-container">
        <aside>
            <p>© 2020 Pavlina Zafeiri</p>
        </aside>
        <aside className="links">
          <a href="https://github.com/Pavlitsa" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/pavlina-zafeiri-37109457/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </aside>
      </section>
    </div>
  );
};

export default Footer;
