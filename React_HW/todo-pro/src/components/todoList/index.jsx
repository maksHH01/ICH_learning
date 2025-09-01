import TodoItem from "../todoItem";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todo.data);
  return (
    <section className={styles.todoListSection}>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
