import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./slices/applicationSlice";


export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
});
