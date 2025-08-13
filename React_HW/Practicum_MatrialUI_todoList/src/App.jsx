import "./App.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  TextField,
  Checkbox,
} from "@mui/material";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }

  function handleToggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function handleDeleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ToDo List</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h5">Todo Task</Typography>

            <Box mt={2}>
              <TextField
                name="task"
                label="Add Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTask}
                  fullWidth
                >
                  Add
                </Button>
              </Box>
            </Box>

            <List>
              {tasks.map((taskItem, index) => (
                <ListItem key={index}>
                  <Checkbox
                    checked={taskItem.completed}
                    onChange={() => handleToggleTask(index)}
                  />
                  <ListItemText
                    primary={taskItem.text}
                    style={{
                      textDecoration: taskItem.completed
                        ? "line-through"
                        : "none",
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
