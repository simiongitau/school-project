import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// creating the start
const cartSlice = createSlice({
  name: "cart",
  // initial value of the state
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  //   methods that acess the state and provide action to change the value
  reducers: {
    //   first action method
    addToCart(state, action) {
      // use action.payload because the value are acqure from external component
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //   condition statement
      itemIndex >= 0
        ? (state.cartItems[itemIndex].cartQuantity += 1) &&
          toast.info(`increase ${state.cartItems[itemIndex].name} quantity`, {
            position: "bottom-left",
          })
        : state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      toast.success(`${action.payload.name} added to cart`, {
        position: "bottom-left",
      });
      // adding cat to local storage to prevent default lse when refresh
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // removing items from the cart
    removeItemsCart(state, action) {
      // array method
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      // updating the state
      state.cartItems = nextCartItems;
    },
  },
});

// export method to change value
export const { addToCart, removeItemsCart } = cartSlice.actions;
// exporting reducer to use in store
export default cartSlice.reducer;
