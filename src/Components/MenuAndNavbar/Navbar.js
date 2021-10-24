import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="nav">
      <Menu />
      <p style={{ marginRight: "5vw" }}>
        slobodandodic
        <span style={{ color: "#cd0000" }}>@</span>gmail.com
      </p>
    </div>
  );
};

export default Navbar;
