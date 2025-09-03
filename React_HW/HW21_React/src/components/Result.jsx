import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

const Result = () => {
  const questions = useSelector((state) => state.questionnaire.questions);
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null;

  const score = questions.reduce(
    (acc, q) => (q.answer === "Да" ? acc + 1 : acc),
    0
  );

  return (
    <div className={styles.result}>
      <h3>Your score: {score}</h3>
      <pre>{result}</pre>
    </div>
  );
};

export default Result;
