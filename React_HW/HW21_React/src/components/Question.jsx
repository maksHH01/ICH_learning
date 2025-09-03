import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      answerQuestion({ questionId: question.id, answer: e.target.value })
    );
  };

  return (
    <div className={styles.question}>
      <p>{question.text}</p>
      {question.options.map((option) => (
        <label key={option} className={styles.option}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={question.answer === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
