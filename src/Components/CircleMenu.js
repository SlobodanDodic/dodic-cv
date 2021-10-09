import React from "react";

const CircleMenu = () => {
  return (
    <div className="work-page">
      <div className="work-text">
        Below you can see part of my projects while the rest you can see on my
        GitHub page.
        <p style={{ color: "#cb0000" }}>hover over gitHub icon</p>
      </div>

      <div className="empty-wrap">
        <div className="empty-wrap"></div>
      </div>

      <div className="wrap">
        {/* Upper left */}
        <a
          className="menu-project"
          href="https://github.com/SlobodanDodic/firebase-app"
          target="_blank"
          rel="noreferrer"
        >
          <div></div>
        </a>

        {/* Upper right */}
        <a
          className="menu-project"
          href="https://github.com/SlobodanDodic/lteam.rs"
          target="_blank"
          rel="noreferrer"
        >
          <div></div>
        </a>

        {/* Bottom left */}
        <a
          className="menu-project"
          href="https://github.com/SlobodanDodic/MTT"
          target="_blank"
          rel="noreferrer"
        >
          <div></div>
        </a>

        {/* Bottom right */}
        <a
          className="menu-project"
          href="https://github.com/SlobodanDodic/apartments19"
          target="_blank"
          rel="noreferrer"
        >
          <div></div>
        </a>
        {/* main cirlce */}
        <a
          className="menu-project"
          href="https://github.com/SlobodanDodic?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <div></div>
        </a>
      </div>

      {/* <div className="info-work-text">
        <p className="up-text">Firebase MTT</p>
        <p className="down-text">lteam sombor19</p>
      </div> */}
    </div>
  );
};

export default CircleMenu;
