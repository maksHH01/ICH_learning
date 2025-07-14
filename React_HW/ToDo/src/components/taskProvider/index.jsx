import { useState } from "react";
import TaskContext from "../../TaskProvider";

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
