import React from "react";
import { Link } from "react-router-dom";
import { questions } from "./Questions";
import player from "../../Assets/about/player.png";

export const ScoreSectionWin = ({ score }) => {
  return (
    <div className="score-section">
      <h1>You won!</h1>
      <h4>
        You scored {score} out of {questions.length}
      </h4>
      <img src={player} alt="player" />
      <p>
        You've earned a passage <br /> to a hidden page!
      </p>
      <Link className="reset-btn" to="/songs">
        <button className="reset-btn">Go to music!</button>
      </Link>
    </div>
  );
};
