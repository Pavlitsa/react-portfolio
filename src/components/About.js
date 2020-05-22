import React from "react";
import Footer from "./Footer";
// import "./About.css";
import Header from "./Header";

const About = () => {
  const headerAbout = 
    {
      title1: "A little bit about me.",
      img: "flower.jpg"
    }
  return (
    <div className="about">
      <Header title1={headerAbout.title1} image={headerAbout.img} />
      <Footer />
    </div>
  );
};

export default About;
