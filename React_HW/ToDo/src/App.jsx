import "./App.css";
import Form from "./components/taskForm/Form";
import TaskList from "./components/taskList/List";
import TaskProvider from "./components/taskProvider";

function App() {
  return (
    <TaskProvider>
      <Form />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
