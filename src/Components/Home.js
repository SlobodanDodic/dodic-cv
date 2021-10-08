import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Ticker from "react-ticker";
import Particles from "react-particles-js";
import Info from "./Info";

const Home = () => {
  const bDay = new Date("June 8, 1979, 01:25:00");
  const today = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  const diffDays = (today - bDay) / oneDay;
  const miliSec = diffDays * 1000 * 60 * 60 * 24;

  const [counter, setCounter] = useState(miliSec);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <div className="home">
        <div className="links">
          <Link to="about" className="me">
            About me
            <span></span>
          </Link>
          <Link to="/projects" className="work">
            My work
            <span></span>
          </Link>
        </div>

        <Particles
          className="particles-container"
          params={{
            // fps_limit: 200,
            particles: {
              number: { value: 75 },
              size: { value: 2 },
              move: { speed: 1 },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                },
                resize: false,
              },
            },
          }}
        />

        <div className="line">
          <Ticker speed={3}>
            {({ index }) => (
              <p style={{ color: "whitesmoke" }}>
                The sun is the same in a relative way but you're older. . .
              </p>
            )}
          </Ticker>
        </div>

        <div className="days">
          <NumberFormat
            className="numbers"
            value={Math.round(diffDays)}
            displayType={"text"}
            format="##.####"
          />
          <p>days on Earth</p>
        </div>
      </div>

      <Info />
    </>
  );
};

export default Home;
