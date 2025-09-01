import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import basketReducer from "./slices/basketSlice";
export default configureStore({
  reducer: {
    todo: todoReducer,
    basket: basketReducer,
  },
});
