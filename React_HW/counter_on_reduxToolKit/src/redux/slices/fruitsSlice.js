import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [
    { id: 1, name: "Banana" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Pineapple" },
  ],
};

const FruitsSlice = createSlice({
  name: "fruite",
  initialState,
  reducers: {
    addFruit(state, action) {
      state.fruits.push(action.payload);
    },
  },
});

export const { addFruit, removeFruit } = FruitsSlice.actions;
export default FruitsSlice.reducer;
