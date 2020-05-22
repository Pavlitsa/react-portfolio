import React from "react";
import "./Projects.css";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Projects = () => {
  const headerProjects = {
    title1: "Projects I have created",
    title2: "or participated in.",
    img: "sketch.jpg"
  };

  return (
    <div className="home">
      <Header title1={headerProjects.title1} title2={headerProjects.title2} image={headerProjects.img} />
      <Footer />
    </div>
  );
};

export default Projects;

