import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";
import fruitsReducer from "./slices/fruitsSlice";

const store = configureStore({
  reducer: {
    countReducer,
    fruitsReducer,
  },
});

export default store;
