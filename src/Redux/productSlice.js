import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : [],
    pending: false,
    error: false,
  },
  reducers: {
    prodcutStart: (state) => {
      state.pending = true;
    },
    productSuccess: (state, action) => {
      state.pending = false;
      // updating the user
      state.productInfo = action.payload;
      localStorage.setItem("product", JSON.stringify(state.productInfo));
    },
    productError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});
export const { prodcutStart, productSuccess, productError } =
  productSlice.actions;
// exporting reducer to use in store
export default productSlice.reducer;
