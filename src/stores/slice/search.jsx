import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProducts: [],
  searchServices: [],
};

const productServicesSlice = createSlice({
  name: "productServices",
  initialState,
  reducers: {
    setSearchProducts(state, action) {
      state.searchProducts = action.payload;
    },
    setSearchServices(state, action) {
      state.searchServices = action.payload;
    },
  },
});

export const { setSearchProducts, setSearchServices } =
  productServicesSlice.actions;
export default productServicesSlice.reducer;
