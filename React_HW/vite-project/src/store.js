import { configureStore } from "@reduxjs/toolkit";
import anketeReducer from "./features/questionnaire/anketeSlice";

const store = configureStore({
  reducer: {
    questionnaire: anketeReducer,
  },
});

export default store;
