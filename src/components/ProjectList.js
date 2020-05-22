import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  const projects = [
    {
      id: "1",
      title: "Ghost Town",
      description:
        "A game for two players who have to cross the street without getting caught by the passing-by obstacles.",
      stack: "Built with: Javascript, p5.js, HTML, CSS",
      img: "ghost-town.png",
    },
    {
      id: "2",
      title: "Coffefi",
      description:
        "Full stack responsive application with user generated content that helps users find or pin on a map all the work-friendly coffee places in the city.",
      stack:
        "Built with: Node.js, Express, MongoDB, JavaScript, Mapbox API, HTML, CSS",
      img: "coffefi.png",
    },
    {
      id: "3",
      title: "Flat Happens",
      description:
        "Full stack responsive MERN application that allows users who live in a shared flat to arrange a schedule for their shared tasks.",
      stack:
        "Built with: React, Node.js, MongoDB, Express, JavaScript, HTML & CSS",
      img: "flat-happens.png",
    },
  ];

  const ProjectComponent = projects.map((project, i) => {
    return (
      <ProjectCard title={projects[i].title} description={projects[i].description} stack={projects[i].stack} image={projects[i].img}
      />
    );
  });
  return <div>{ProjectComponent}</div>;
};

export default ProjectList;

// 
//   /* <ProjectCard
//       title={projects[0].title}
//       description={projects[0].description}
//       stack={projects[0].stack}
//       image={projects[0].img} */
// 
