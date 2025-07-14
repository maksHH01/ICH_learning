import { useContext } from "react";
import TaskContext from "../../TaskProvider";

export default function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleDelete(indexToDelete) {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  }

  return (
    <ul>
      {tasks.map((element, index) => (
        <li key={index}>
          <p>{element}</p>
          <button onClick={() => handleDelete(index)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}
