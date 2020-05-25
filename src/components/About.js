import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import Header from "./Header";

const About = () => {
  const headerAbout = {
    title1: "A little bit about me.",
    img: "pavi.jpg",
  };
  return (
    <div className="about">
      <Header title1={headerAbout.title1} image={headerAbout.img} />
      <hr className="hr" />
      <section className="about-container">
        <div className="profile">
          <h4>Profile</h4>
        </div>
        <div>
          <p>
            I am a Web Developer with a hands-on attitude and great
            communication skills. I recently completed an intensive Web
            Development Bootcamp at Ironhack, Berlin. With a background in
            E-Commerce Customer Operations, I am looking for a Web Developer
            internship in a welcoming team, where opportunities for growth and
            professional development are embraced and where I can apply and
            develop my recently acquired skills.
          </p>
        </div>
      </section>
      <hr className="hr" />
      <section className="about-container">
        <div>
          <h4>Experience</h4>
        </div>
        <div className="experience">
          <p>
            <strong>
              Full Stack Web Development Bootcamp
            </strong>, 
            Oct. - Dec. 2019 Ironhack
              Berlin, Germany
          </p>
          <p>
            <strong>E-Commerce Customer Operations Manager </strong>,
            Freeletics GmbH, Munich Oct. 2015 - Jul. 2019
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
