import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Задача номер 1" },
    { id: 2, text: "Задача номер 2" },
    { id: 3, text: "Задача номер 3" },
  ]);

  function addTodo() {
    const newTask = {
      id: Date.now(),
      text: `Задача ${todo.length + 1}`,
    };
    setTodo([...todo, newTask]);
  }

  function removeTodo() {
    setTodo([]);
  }

  return (
    <div>
      <h1>Список задач:</h1>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={removeTodo}>Remove todo</button>
      <ul>
        {todo.map((task) => {
          return <Task key={task.id} text={task.text} />;
        })}
      </ul>
    </div>
  );
}

export default App;
