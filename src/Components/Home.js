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

        <div className="dod">
          <div className="letters d1"></div>
          <div className="letters o"></div>
          <div className="letters d2"></div>
        </div>

        <div className="line">
          <Ticker speed={7}>
            {({ index }) => (
              <>
                <p style={{ color: "whitesmoke" }}>
                  Ticking away the moments that make up a dull day / Fritter and
                  waste the hours in an offhand way / Kicking around on a piece
                  of ground in your hometown. / Waiting for someone or something
                  to show you the way / Tired of lying in the sunshine, staying
                  home to watch the rain / You are young and life is long, and
                  there is time to kill today / And then one day you find ten
                  years have got behind you / No one told you when to run, you
                  missed the starting gun / And you run, and you run to catch up
                  with the sun but it's sinking / Racing around to come up
                  behind you again / The sun is the same in a relative way but
                  you're older / Shorter of breath and one day closer to death /
                  Every year is getting shorter, never seem to find the time /
                  Plans that either come to naught or half a page of scribbled
                  lines / Hanging on in quiet desperation is the English way /
                  The time is gone, the song is over, thought I'd something more
                  to say / Home, home again I like to be here when I can / And
                  when I come home cold and tired / It's good to warm my bones
                  beside the fire / Far away across the field / The tolling of
                  the iron bell / Calls the faithful to their knees / To hear
                  the softly spoken magic spells...
                </p>
              </>
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
