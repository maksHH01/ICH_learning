import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
