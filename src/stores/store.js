import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
import favirotSlice from "./slice/favirot"

export default configureStore({
  reducer: {
    user: userSlice,
    favirot : favirotSlice,
  },
});
