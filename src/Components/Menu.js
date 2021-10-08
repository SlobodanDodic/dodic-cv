import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const [menuOpen, toggleMenu] = useState(false);

  useEffect(() => toggleMenu(false), [location]);

  return (
    <>
      <div
        className={`menu-icon__container${menuOpen ? " menu-open" : ""}`}
        onClick={() => toggleMenu(!menuOpen)}
      >
        <div className="menu-icon">
          <div />
          <div />
          <div />
        </div>
        <span className={`menu-icon-circle${menuOpen ? "" : " menu-open"}`} />
      </div>

      <div className={`menu-list-container${menuOpen ? " menu-open" : ""}`}>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <div className="menu-item__title">Home</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">reboot yourself</div>
          </Link>
          <Link to="/projects" className="menu-item">
            <div className="menu-item__title">My Work</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">some of my projects</div>
          </Link>
          <Link to="/about" className="menu-item">
            <div className="menu-item__title">About Me</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">
              nothing special about me MF
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
