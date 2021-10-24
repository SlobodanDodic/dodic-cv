import React from "react";
import git from "../../Assets/icons/git.png";
import ProjectsMap from "./ProjectsMap";

const Projects = () => {
  return (
    <div className="work-page">
      <div className="work-text">
        Below you can see part of my projects while the rest you can see on my
        GitHub page.
        <p style={{ color: "#cb0000", marginTop: "7px" }}>
          click on the gitHub icon
        </p>
      </div>

      <a
        className="git"
        href="https://github.com/SlobodanDodic?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img src={git} alt="" />
      </a>

      <ProjectsMap />
    </div>
  );
};

export default Projects;
