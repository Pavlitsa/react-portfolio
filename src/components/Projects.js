import React from "react";
import "../styles/Projects.css";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProjectList from "./ProjectList";

const Projects = (props) => {
  const headerProjects = {
    title1: "Below you can find all the projects I have created or participated in.",
    img: "sketch.jpg"
  };



  return (
    <div className="home">
      <Header title1={headerProjects.title1} image={headerProjects.img} />
      <hr className="hr" />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Projects;

