import React from "react";
import Footer from "./Footer";
// import "./About.css";
import Header from "./Header";

const About = () => {
  const headerAbout = 
    {
      title1: "A little bit about me.",
      img: "pavi.jpg"
    }
  return (
    <div className="about">
      <Header title1={headerAbout.title1} image={headerAbout.img} />
      <section>

      </section>
      <section>
        
      </section>
      <Footer />
    </div>
  );
};

export default About;
