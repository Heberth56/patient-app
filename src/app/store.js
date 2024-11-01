import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import patientSlice from "./slice/patientSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    patientSlice: patientSlice,
  },
});
