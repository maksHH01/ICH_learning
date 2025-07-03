import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import List from "./components/List";

function App() {
  return (
    <div className="mainBlock">
      <h1>Задание 1:</h1>
      <Rating />
      <h2>Задание 2:</h2>
      <List />
    </div>
  );
}

export default App;
