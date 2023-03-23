import React from "react";

function ProjectItem({ name, about, technologies }) {

  const spanElement = technologies.map((tech) => {
    return <span key={tech}>{tech}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spanElement}
      </div>
    </div>
  );
}

export default ProjectItem;
