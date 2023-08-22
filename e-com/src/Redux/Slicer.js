import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: {
    bio : ""
  },
};

const userDetails = createSlice({
  name: "userBioDetails",
  initialState,
  reducers: {
    addProfileBio: (state, action) => {
      state.usersData.bio = action.payload;
    },
    logout: (state, action) => {
        state.usersData.bio = action.payload;
      },
  },
});

export const { addProfileBio , logout } = userDetails.actions;

export default userDetails.reducer;