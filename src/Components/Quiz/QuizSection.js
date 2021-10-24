import React from "react";
import { questions } from "./Questions";

export const QuizSection = ({ currentQuestion, handleAnswerOptionClick }) => {
  return (
    <div>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>

      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, id) => (
          <button
            key={id}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};
