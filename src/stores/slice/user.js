import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },

    saveUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { saveUserData, saveUserToken } = userSlice.actions;

export default userSlice.reducer;
