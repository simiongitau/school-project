import { configureStore } from "@reduxjs/toolkit";
// import our user userSlice
import userReducer from "./UserSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import deliverReducer from "./deliverSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    deliver: deliverReducer,
  },
});
