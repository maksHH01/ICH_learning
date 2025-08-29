import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Alice",
    mail: "alice@example.com",
  },
  {
    name: "Bob",
    mail: "bob@example.com",
  },
  {
    name: "Charlie",
    mail: "charlie@example.com",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
