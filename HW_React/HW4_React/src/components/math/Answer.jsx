import React, { useState } from "react";

export default function Answer({ onAnswer }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите ответ"
        required
      />
      <button type="submit">Ответить</button>
    </form>
  );
}
