import React from "react";
import { Link } from "react-router-dom";
import logoSD from "../Assets/logoSD.png";
import menu from "../Assets/menu.png";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img className="logo-img" src={logoSD} alt="logo" />
      </Link>
      <p>
        slobodandodic<span style={{ color: "#cd0000" }}>@</span>gmail.com
      </p>
      <img className="menu-img" src={menu} alt="menu" />
    </div>
  );
};

export default Navbar;
