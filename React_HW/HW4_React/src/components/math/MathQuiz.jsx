import React, { useState } from "react";
import Answer from "./Answer";

export default function MathQuiz() {
  const generateQuestion = () => ({
    a: Math.floor(Math.random() * 10),
    b: Math.floor(Math.random() * 10),
  });

  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);

  const handleAnswer = (userAnswer) => {
    const correct = question.a + question.b;
    if (parseInt(userAnswer) === correct) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    setQuestion(generateQuestion());
  };

  return (
    <div className="quiz-container">
      <h2>
        Сколько будет: {question.a} + {question.b}?
      </h2>
      <Answer onAnswer={handleAnswer} />
      <p className="score">Счёт: {score}</p>
    </div>
  );
}
