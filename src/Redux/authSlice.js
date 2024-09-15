import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

// Define Initial State
const initialState = {
  status: "",
  message: "",
  redirectedToHome: null,
  redirectedToLogin: null,
  isLoggedIn: false,
  isInRegistration: false,
};

// Registration API Calling
export const register = createAsyncThunk("register", async (formData) => {
  const response = await axiosInstance.post("user/signup", formData);
  const result = response.data;

  //   // For Testing
  //   console.log("At the time of Registration", result);
  return result;
});

// Login API Calling
export const logIn = createAsyncThunk("login", async (formData) => {
  const response = await axiosInstance.post("user/signin", formData);
  const result = response.data;

  //   // For testing
  //   console.log("At the time of Login", result);
  return result;
});

// Define Authentication Slice
export const authenticationSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // For Reseting the Registration State
    reset_registration: (state) => {
      state.status = "";
      state.message = "";
      state.redirectedToLogin = null;
    },
    // For reseting the Login State
    reset_login: (state) => {
      state.status = "";
      state.message = "";
      state.redirectedToHome = null;
    },
    // For logout user
    handleLogout: (state) => {
      localStorage.removeItem("token"); // Remove token which was set at the time of login
      localStorage.removeItem("firstName"); // Remove first Name which was set at the time of Registration
      localStorage.removeItem("lastName"); // Remove last Name which was set at the time of Registration
      localStorage.removeItem("Firstname"); // Remove Name which was set at the time of login
      localStorage.removeItem("Email"); // Remove Email which was set at the time of login
      state.isLoggedIn = false;
      state.isInRegistration = false;
    },
    // check_token and check_name are usefull for Protected Route
    check_token: (state) => {
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLoggedIn = true;
      }
    },
    check_name: (state) => {
      const name = localStorage.getItem("firstName");
      if (name !== null && name !== undefined) {
        state.isInRegistration = true;
      }
    },
  },
  extraReducers: (builder) => {
    // For Registration Promise Handle
    builder.addCase(register.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.status = "Success";
      state.message = payload.message;
      localStorage.setItem("firstName", payload.data.first_name);
      localStorage.setItem("lastName", payload.data.last_name);
      state.isInRegistration = true;
      state.redirectedToLogin = "/login";
    });
    builder.addCase(register.rejected, (state, { error }) => {
      state.status = "Rejected";
      state.message = error.message;
    });

    // For Login Promise Handle
    builder.addCase(logIn.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.status = "Success";
      state.message = payload.message;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("Firstname", payload.data.first_name);
      localStorage.setItem("Email", payload.data.email);
      state.isLoggedIn = true;
      state.redirectedToHome = "/";
    });
    builder.addCase(logIn.rejected, (state, { error }) => {
      state.status = "Rejected";
      state.message = error.message;
    });
  },
});

export const {
  reset_registration,
  reset_login,
  handleLogout,
  check_token,
  check_name,
} = authenticationSlice.actions;
