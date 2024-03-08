import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slice/location";

export default configureStore({
  reducer: {
    location: locationReducer,
  },
});
