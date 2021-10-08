import React from "react";
// import html from "../Assets/icons/html.png";
// import css from "../Assets/icons/css.png";
// import react from "../Assets/icons/react.png";
// import git from "../Assets/icons/git.png";

const Info = () => {
  return (
    <div className="info">
      <div className="info-red">
        <div className="text-down">
          I have decided to give my best in attempt to become a front-end
          developer. So far I have worked in html, css and js mostly using
          JavaScript library React...
        </div>
        <div className="info-div"></div>
      </div>
      {/* <div className="div-icons">
        <img className="front-icon" src={html} alt="html" />
        <img className="front-icon" src={css} alt="css" />
        <img className="front-icon" src={react} alt="react" />
        <img className="front-icon" src={git} alt="git" />
      </div> */}
    </div>
  );
};

export default Info;
