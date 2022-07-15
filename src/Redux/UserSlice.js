import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // store name user
  //this is our state
  name: "user",
  initialState: {
    userInfo: {
      email: "",
      password: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    // update action or update methode
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      // updating the user
      state.userInfo = action.payload;
    },
    // if error occur
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
    //   nothing require or update the value so no need of payload
    remove: (state) => {
      state.userInfo = null;
    },
  },
});
// exporting the action or the methode that will be used in updating the value
export const { updateStart, updateError, updateSuccess, remove } =
  userSlice.actions;
// exporting reducer to use in store
export default userSlice.reducer;
