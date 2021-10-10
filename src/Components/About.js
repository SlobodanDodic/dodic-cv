import React from "react";
import { Link } from "react-router-dom";
import GuitarsMap from "./AboutAtoms/GuitarsMap";
import headphones from "../Assets/about/headphones.png";

const About = () => {
  return (
    <div className="about">
      <div className="music-text">
        <h1>I love music and guitars :&#41;</h1>
        <p>...and that's pretty much all you need to know about me...</p>
      </div>

      <GuitarsMap />

      {/* <div className="songs-text">
        <h1>Click to listen</h1>
        <p>some of my guitar ideas</p>
      </div>

      <div className="headphones-icon">
        <Link to="/songs">
          <img src={headphones} alt="headphones" />
        </Link>
      </div> */}
    </div>
  );
};

export default About;
