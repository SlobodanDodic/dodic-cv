import React from "react";
import GuitarsMap from "./AboutAtoms/GuitarsMap";
import { Link } from "react-router-dom";
import headphones from "../Assets/about/headphones.png";

const About = () => {
  return (
    <div className="about">
      <div className="music-text">
        <h1>&#35; I love music &#38; guitars!</h1>
        <p>...and that's pretty much all you need to know about me...</p>
      </div>
      <div className="lyrics">
        <h3>"Oh my God!</h3>
        <h3>What a fabulous honeycomb gallery!</h3>
        <h3>Are all these your guitars?</h3>
        <h3>This gallery is bigger than our apartment!"</h3>
        <small>slightly altered words by ROGER WATERS</small>
      </div>

      <GuitarsMap />

      <div className="songs-text">
        <h1>Click the headphones</h1>
        <p style={{ color: "#cd0000" }}>to listen some music</p>
      </div>

      <div className="headphones-icon">
        <Link to="/songs">
          <img src={headphones} alt="headphones" />
        </Link>
      </div>
    </div>
  );
};

export default About;
