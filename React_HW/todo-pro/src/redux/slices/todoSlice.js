import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.data.push(action.payload);
      state.count++;
    },
    deleteTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
      state.count--;
    },
    completeTodo(state, action) {
      state.data = state.data.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
