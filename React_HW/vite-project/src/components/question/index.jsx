import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../features/questionnaire/anketeSlice";

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{question.question}</h3>
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
