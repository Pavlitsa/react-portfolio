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
        <div>
          <h4>Profile</h4>
        </div>
        <div className="profile">
          <p>
            My name is Pavlina and I recently became a Web Developer. With a
            degree in Political Science and first working experience in the film
            industry, almost 8 years ago I decided to move to Munich. After
            working in Retail and later in E-Commerce as a Customer Operations
            Manager, I recently decided to make a big career change and fully
            dedicate myself to learning how to code. Programming has always
            fascincated me because of all that can be built and achieved with
            it. As a plus, it offers me the opportunity for constant learning
            and improvement.
          </p>
          <p>
            For those reasons I decided to join the Ironhack Web Development
            Bootcamp in Berlin in winter of 2019. I am currently refining my
            skills by building new projects and looking forward to joining
            a welcoming team as an Junior Developer or Intern.
          </p>
          <p>
            You can check out my latest projects here (or add under experience a
            projects section with a link to the project page: idea here is to
            make the user jump through your website smoothly. Homepage --> link
            to about me --> link to projects)
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
            <strong>Full Stack Web Development Bootcamp</strong>, Oct. - Dec.
            2019 Ironhack Berlin, Germany
          </p>
          <p>
            <strong>E-Commerce Customer Operations Manager </strong>, Freeletics
            GmbH, Munich Oct. 2015 - Jul. 2019
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
