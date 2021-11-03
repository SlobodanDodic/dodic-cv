import React from "react";
import ioPhoto from "../../Assets/io.png";

const Neofetch = () => {
  return (
    <div className="neofetch-container">
      <div className="terminal-head">
        <span>$</span>&nbsp;neofetch mySelf
      </div>
      <div className="neofetch">
        <img src={ioPhoto} alt="profile" className="neofetch-item img" />
        <div className="neofetch-item terminal">
          <span>OS</span>: Manjaro Gnome
          <br />
          <span>Location</span>: Novi Sad, Serbia
          <br />
          <span>Code editor</span>: Visual Studio Code
          <br />
          <span>Sensei</span>: Mosh, The Net Ninja
          <br />
          <span>Base</span>: HTML, JS, OOP, React
          <br />
          <span>MakeUp</span>: CSS, SASS, Responsive
          <br />
          <span>Learning</span>: MySQL, Node.js
          <br />
        </div>
      </div>
    </div>
  );
};

export default Neofetch;
