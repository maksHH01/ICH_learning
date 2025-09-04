import { configureStore } from "@reduxjs/toolkit";
import authReducer, {
  checkTokenExperiationMiddleWare,
} from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkTokenExperiationMiddleWare),
});

export default store;
