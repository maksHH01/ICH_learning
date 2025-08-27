import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  color: "black",
};

const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    plusOne(state, action) {
      state.count++;
    },
    minusOne(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setRandomColor(state) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      state.color = randomColor;
    },
  },
});

export const { plusOne, minusOne, reset, setRandomColor } = countSlice.actions;
export default countSlice.reducer;
