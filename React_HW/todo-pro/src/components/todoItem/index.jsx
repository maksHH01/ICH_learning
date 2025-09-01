import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/slices/todoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo(id));
  }
  return (
    <li key={id} className={styles.todoItem}>
      <p>{title}</p>
      <div>
        <button className={styles.toggleCompleteBtn}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleDelete} className={styles.deteleBtn}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
