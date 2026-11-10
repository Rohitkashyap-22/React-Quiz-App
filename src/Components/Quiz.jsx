import "./Quiz.css"
import Question from "./Question"
import data from "../data.js"
import { useState } from "react"

const Quiz = () => {
  const [index, setIndex] = useState(0);            // index=data[index]
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const handleSelect = (option) => {
    setCurrentAnswer(option)
  }
  const handleClick = () => {
    if(currentAnswer===data[index].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setIndex((prevIndex) => prevIndex + 1);
    setCurrentAnswer(null);
  }
  const handleReset = () => {
    setIndex(0)
    setCurrentAnswer(null)
    setScore(0)
  }
  return (
    <div className="container">
      {index < data.length ? (
        <div className="qsnbox">
          <div className="header">
            <h1>Quiz</h1>
            <p>
              Status: {index + 1}/{data.length} Completed
            </p>
          </div>
          <Question
            id={data[index].id}
            qsn={data[index].qsn}
            options={data[index].options}
            answer={data[index].answer}
            handleSelect={handleSelect}
            currentAnswer={currentAnswer}
          />
          <button
            className={currentAnswer !== null ? "active" : "inactive"}
            disabled={currentAnswer === null}
            onClick={handleClick}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="result">
          <h3>Quiz Completed</h3>
          <h3> score: {score}</h3>
        </div>
      )}

      <button
        className="active"
        style={{ backgroundColor: "rgb(111, 16, 52)" }}
        onClick={handleReset}
      >
        Reset Quiz
      </button>
    </div>
  );
};

export default Quiz;
