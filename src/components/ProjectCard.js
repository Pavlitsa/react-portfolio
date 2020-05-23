import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card-container">
      <section className="card">
        <div className="ghost-img">
        <h2>{props.title}</h2>
          <img
            src={props.image}
            alt="screenshot"
            height="500px"
            width="800px"
            className="project-img"
          />
        </div>
        <div className="project-title">
          
          <h5 id="description">{props.description}</h5>
          <h5>{props.stack}</h5>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
