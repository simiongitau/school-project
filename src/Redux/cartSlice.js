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
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartItems[itemIndex].total += state.cartItems[itemIndex].price;
        toast.info(`increase ${state.cartItems[itemIndex].name} quantity`, {
          position: "bottom-left",
        });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
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
      // updating the local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast message
      toast.error(`${action.payload.name} remove from cart`, {
        position: "bottom-left",
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartItems[itemIndex].total -= state.cartItems[itemIndex].price;
        // tost message
        toast.info(`Decrease${action.payload.name}cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;

        toast.error(`${action.payload.name} reduced`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error(`cart cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

// export method to change value
export const {
  addToCart,
  removeItemsCart,
  decreaseCart,
  clearCart,
  getTotals,
  addDetail,
} = cartSlice.actions;
// exporting reducer to use in store
export default cartSlice.reducer;
