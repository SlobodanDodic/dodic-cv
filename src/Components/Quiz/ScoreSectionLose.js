import React from "react";
import { questions } from "./Questions";
import Gandalf from "../../Assets/about/gandalf.png";

export const ScoreSectionLose = ({ score, setCurrentQuestion }) => {
  return (
    <div className="score-section">
      <h1>You lost!</h1>
      <h4>
        You scored {score} out of {questions.length}
      </h4>

      <img src={Gandalf} alt="Gandalf" />

      <p>
        You need at least 3 point <br /> to move forward!
      </p>
      <button className="reset-btn" onClick={() => setCurrentQuestion(0)}>
        Reset
      </button>
    </div>
  );
};
