import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Результаты анкеты:</h2>
      <ul>
        {result.map((item, index) => (
          <li key={index}>
            <strong>{item.question}</strong> — {item.answer || "Нет ответа"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
