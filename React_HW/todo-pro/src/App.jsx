import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="main">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
