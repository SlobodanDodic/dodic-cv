import React from "react";
import { BinaryClock } from "binary-clock-react";

const Info = () => {
  return (
    <div className="info">
      <div className="info-red">
        <div className="text-down">
          I have decided to give my best in attempt to become a front-end
          developer. So far I have worked in html, css and js mostly using
          JavaScript library React...
        </div>

        <BinaryClock />
      </div>
    </div>
  );
};

export default Info;
