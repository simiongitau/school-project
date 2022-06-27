import { configureStore } from "@reduxjs/toolkit";
// import our user userSlice
import userReducer from "./UserSlice";
import cartReducer from "./cartSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
