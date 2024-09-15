import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authSlice";
import { userProfileSlice } from "./profileSlice";
import { crudSlice } from "./crudSlice";

// Define Store
const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    profile: userProfileSlice.reducer,
    crud: crudSlice.reducer,
  },
});

export default store;
