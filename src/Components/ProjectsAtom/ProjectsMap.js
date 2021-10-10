import React from "react";
import { ProjectsData } from "./ProjectsData";

const ProjectsMap = () => {
  return (
    <div className="box-container">
      {ProjectsData.map((item) => {
        return (
          <div className="box-item" key={item.id}>
            <div className="flip-box">
              <div className={`flip-box-front text-center ${item.className}`}>
                <div className="inner color-white">
                  <img src={item.arrow} alt="" className="flip-box-img" />
                </div>
              </div>
              <div className={`flip-box-back text-center ${item.className}`}>
                <div className="inner color-white">
                  <p>
                    <strong>{item.title}</strong> <br />
                    {item.text}
                  </p>
                  <button className="flip-box-button">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.button}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsMap;
