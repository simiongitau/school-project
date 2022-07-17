import { createSlice } from "@reduxjs/toolkit";

const deliverSlice = createSlice({
  // store name user
  //this is our state
  name: "deliver",
  initialState: {
    deliverInfo: localStorage.getItem("deliver")
      ? JSON.parse(localStorage.getItem("deliver"))
      : [],
    pending: false,
    error: false,
  },
  reducers: {
    // update action or update method
    deliverStart: (state) => {
      state.pending = true;
    },
    deliverSuccess: (state, action) => {
      state.pending = false;
      // updating the user
      state.deliverInfo = action.payload;
      localStorage.setItem("deliver", JSON.stringify(state.deliverInfo));
    },
    // if error occur
    deliverError: (state) => {
      state.error = true;
      state.pending = false;
    },
    //   nothing require or update the value so no need of payload
  },
});
// exporting the action or the method that will be used in updating the value
export const { deliverStart, deliverError, deliverSuccess } =
  deliverSlice.actions;
// exporting reducer to use in store
export default deliverSlice.reducer;
