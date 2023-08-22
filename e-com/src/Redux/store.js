import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./Slicer"

const store = configureStore({
  reducer: {
    activeUser: userDetails,
  },
});

export default store;