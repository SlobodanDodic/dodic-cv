import React from "react";
import { BinaryClock } from "binary-clock-react";
import Neofetch from "./Neofetch";

const Info = () => {
  return (
    <div className="info">
      <div className="info-container">
        <div className="text-down">
          I have decided to give my best in attempt to become a front end
          developer. So far I have worked in html, css and js mostly using
          JavaScript library React...
        </div>

        <Neofetch />

        <h2>It's learning time!</h2>

        <BinaryClock />
      </div>
    </div>
  );
};

export default Info;
