import React, { useState } from "react";
import { ScoreSectionLose } from "./ScoreSectionLose";
import { ScoreSectionWin } from "./ScoreSectionWin";
import { questions } from "./Questions";
import { QuizSection } from "./QuizSection";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const scoreLose = currentQuestion + 1 === questions.length && score < 3;
  const scoreWin = currentQuestion + 1 === questions.length && score >= 3;

  return (
    <div className="quiz-container">
      <div className="quiz">
        {showScore && scoreLose ? (
          <ScoreSectionLose
            score={score}
            setCurrentQuestion={setCurrentQuestion}
          />
        ) : showScore && scoreWin ? (
          <div>
            <ScoreSectionWin score={score} />
          </div>
        ) : (
          <QuizSection
            handleAnswerOptionClick={handleAnswerOptionClick}
            currentQuestion={currentQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
