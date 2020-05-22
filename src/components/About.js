import React from "react";
import Footer from "./Footer";
// import "./About.css";
import Header from "./Header";

const About = () => {
  const headerAbout = 
    {
      title: "A little bit about me.",
      img: "alps.jpg"
    }
  return (
    <div className="about">
      <Header title={headerAbout.title} image={headerAbout.img} />
      <Footer />
    </div>
  );
};

export default About;
