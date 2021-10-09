import React from "react";
import git from "../Assets/icons/git-work.png";
import arrow from "../Assets/icons/arrow2.png";

const Projects = () => {
  return (
    <div className="work-page">
      <div className="work-text">
        Below you can see part of my projects while the rest you can see on my
        GitHub page.
        <p style={{ color: "#cb0000", marginTop: "7px" }}>
          click on the gitHub icon
        </p>
      </div>

      <a
        className="git"
        href="https://github.com/SlobodanDodic?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img src={git} alt="" />
      </a>

      <div className="box-container">
        {/* First box */}
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center firebase">
              <div className="inner color-white">
                <img src={arrow} alt="" className="flip-box-img" />
              </div>
            </div>
            <div className="flip-box-back text-center firebase">
              <div className="inner color-white">
                <p>
                  <strong>Firestore App</strong> <br />
                  Sign in, Sign up, Sign out, Fetch, Store User, CRUD Users
                  List, Firebase Authentication, Firestore Database, Storage &
                  Realtime Database
                </p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Second box */}
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center mamarijum">
              <div className="inner color-white">
                <img src={arrow} alt="" className="flip-box-img" />
              </div>
            </div>
            <div className="flip-box-back text-center mamarijum">
              <div className="inner color-white">
                <p>
                  <strong>Mamarijum</strong> <br />
                  An app for tracking recommended weight gain during pregnancy
                </p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Third box */}
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center filter- apartments">
              <div className="inner color-white">
                <img src={arrow} alt="" className="flip-box-img" />
              </div>
            </div>
            <div className="flip-box-back text-center apartments">
              <div className="inner color-white">
                <p>
                  <strong>Apartments Sombor 19</strong> <br />
                  Website made for my cousin. He wanted a website for his
                  apartments in our hometown Sombor.
                </p>
                <button className="flip-box-button">Visit Website ➔</button>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth box */}
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center lteam">
              <div className="inner color-white">
                <img src={arrow} alt="" className="flip-box-img" />
              </div>
            </div>
            <div className="flip-box-back text-center lteam">
              <div className="inner color-white">
                <p>
                  <strong>Driving school L Team Sombor</strong> <br />
                  Website made for my brother-in-law. He wanted a website for
                  his driving school, located in Sombor.
                </p>
                <button className="flip-box-button">Visit Website ➔</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
