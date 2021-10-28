import React from "react";
import { Link } from "react-router-dom";
import DaysAtom from "./DaysAtom";
import ParticlesAtom from "./ParticlesAtom";
import TickerAtom from "./TickerAtom";
import Info from "./Info";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="links">
          <Link to="/about" className="me">
            about me
            <span></span>
          </Link>
          <h1>I'm Slobodan Dodić</h1>
          <Link to="/projects" className="work">
            my work
            <span></span>
          </Link>
        </div>

        <ParticlesAtom />

        <div className="developer">
          <h2>front end developer</h2>
        </div>

        <TickerAtom />

        <DaysAtom />
      </div>

      <Info />
    </>
  );
};

export default Home;
