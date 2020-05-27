import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import Header from "./Header";
import pavi from "../images/pavi.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const headerAbout = {
    title1: "A little bit about me.",
    img: pavi,
  };
  return (
    <div className="about">
      <Header title1={headerAbout.title1} image={headerAbout.img} />
      <hr className="hr" />
      <section className="about-container">
        <div>
          <h4>Profile</h4>
        </div>
        <div className="profile">
          <p>
            My name is Pavlina and I recently became a Web Developer. With a
            degree in <strong>Political Science</strong> and first working
            experience in the <strong>film industry</strong>, almost 8 years ago
            I decided to move to <strong>Munich</strong>. After working in
            Retail and later in <strong>E-Commerce</strong> as a Customer
            Operations Manager, I recently decided to make a big career change
            and fully dedicate myself to learning how to code. Programming has
            always fascincated me because of all that can be built and achieved
            with it. As a plus, it offers me the opportunity for constant
            learning and improvement.
          </p>
          <p>
            Those are some of the reasons why, in winter of 2019, I decided to
            join the <strong>Ironhack Web Development Bootcamp</strong> in
            Berlin. After successfully completing it, I have been working on
            refining my skills by building new projects. I am now looking to
            join a welcoming team as a
            <strong> Junior Developer or Web Development intern</strong>.
          </p>
        </div>
      </section>
      <hr className="hr" />
      <section className="experience">
        <div>
          <h4>Experience</h4>
        </div>
        <div>
          <p>
            <strong>Full Stack Web Development Bootcamp</strong>
            <br />
            Ironhack, Berlin
          </p>

          <p>
            <strong>E-Commerce Customer Operations Manager </strong>
            <br />
            Freeletics GmbH, Munich
          </p>

          <p>
            <strong>Community Management Intern </strong>
            <br />
            InterNations GmbH, Munich
          </p>

          <p>
            <strong>Overnight Visual Merchandiser / Retail </strong>
            <br />
            Hollister Co., Munich
          </p>

          <p>
            <strong>Office Administrator, PA of the Managing Director</strong>
            <br />
            Filmopolis S.A, Athens
          </p>

          <p>
            You can find out more about my professional journey in my{" "}
            <a
              href="https://www.linkedin.com/in/pavlina-zafeiri-37109457/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            profile
          </p>
        </div>
      </section>
      <hr className="hr" />
      <section className="projects-container">
        <div>
          <h4>Projects</h4>
        </div>
        <div className="projects">
          <p>
            You can take a look at my projects <Link to="/react-portfolio/projects">here</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
