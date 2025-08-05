import React from "react";
import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/ValueDisplay";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={text} />
      <p>Ваш текст: {text}</p>

      <ValueDisplay value={text} />
    </div>
  );
}

export default App;
