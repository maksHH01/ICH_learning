import { useContext, useState } from "react";
import TaskContext from "../../TaskProvider";

export default function Form() {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  function handleText(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, text]);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="write todo"
        onChange={handleText}
      />
      <button>Add new todo</button>
    </form>
  );
}
