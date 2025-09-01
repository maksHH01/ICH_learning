import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        name="todoTitle"
        className={styles.todoTitle}
        placeholder="Enter new todo"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="submit"
        value={"Add Todo"}
        className={styles.submitTodoBtn}
      />
    </form>
  );
}

export default TodoForm;

// {
//   title: string,
//   id: string,
//   completed: boolean
// }
