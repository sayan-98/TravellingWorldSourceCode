import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

// Define the initial State of Profile Photo
const initialState = {
  status: "",
  profilePhotoUrl: null,
};

// Profile Phtoto API calling
export const fetchProfileImage = createAsyncThunk("fetchImage", async () => {
  const response = await axiosInstance.get("user/profile-details");
  const result = response.data;

  return result;
});

// Define the Slice
export const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset_profilePhotoUrl: (state) => {
      state.status = "";
      state.profilePhotoUrl = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileImage.pending, (state) => {
      state.status = "Loading...";
    });
    builder.addCase(fetchProfileImage.fulfilled, (state, { payload }) => {
      state.status = "Success";
      state.profilePhotoUrl = payload.data;
    });
    builder.addCase(fetchProfileImage.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

export const { reset_profilePhotoUrl } = userProfileSlice.actions;
