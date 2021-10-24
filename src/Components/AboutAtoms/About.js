import React from "react";
import GuitarsMap from "./GuitarsMap";
import { Link } from "react-router-dom";
import headphones from "../../Assets/about/headphones.png";

const About = () => {
  return (
    <div className="about">
      <div className="music-text">
        <h1>&#35; I love music &#38; guitars!</h1>
        <p>...and that's pretty much all you need to know about me...</p>
      </div>
      <div className="lyrics">
        <h4>"Oh my God!</h4>
        <h4>What a fabulous gallery!</h4>
        <h4>Are all these your guitars?</h4>
        <h4>This gallery is bigger than our apartment!"</h4>
        <small>by ROGER WATERS</small>
      </div>

      <GuitarsMap />

      <div className="songs-text">
        <h1>Click the headphones</h1>
        <p style={{ color: "#cd0000", letterSpacing: "1px", padding: "2px" }}>
          And if you pass the test, listen to my music!
        </p>
      </div>

      <div className="headphones-icon">
        <Link to="/quiz">
          <img src={headphones} alt="headphones" />
        </Link>
      </div>
    </div>
  );
};

export default About;
