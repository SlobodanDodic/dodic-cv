import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Ticker from "react-ticker";
import { Fragment } from "react/cjs/react.production.min";
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
    <Fragment>
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

        <div className="star-container">
          <div className="cross"></div>
        </div>

        <div className="line">
          <Ticker speed={8}>
            {({ index }) => (
              <p style={{ color: "whitesmoke" }}>
                Ticking away the moments that make up a dull day / Fritter and
                waste the hours in an offhand way / Kicking around on a piece of
                ground in your hometown. / Waiting for someone or something to
                show you the way /
              </p>
            )}
          </Ticker>
        </div>

        <div className="days">
          <NumberFormat
            value={Math.round(diffDays)}
            displayType={"text"}
            format="##.####"
          />
          <p>days on Earth</p>
        </div>
      </div>

      <Info />
    </Fragment>
  );
};

export default Home;
