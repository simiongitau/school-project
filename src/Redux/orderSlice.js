import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  // store name user
  //this is our state
  name: "order",
  initialState: {
    orderInfo: localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
      : [],
    pending: false,
    error: false,
    totalSale: 0,
  },
  reducers: {
    // update action or update method
    orderStart: (state) => {
      state.pending = true;
    },
    orderSuccess: (state, action) => {
      state.pending = false;
      // updating the user
      state.orderInfo = action.payload.orders;
      state.totalSale = action.payload.grandTotal;

      localStorage.setItem("order", JSON.stringify(state.orderInfo));
    },
    // if error occur
    orderError: (state) => {
      state.error = true;
      state.pending = false;
    },
    getTotalsSales(state) {
      let updateTotalSale = state.orderInfo.total;
      updateTotalSale = updateTotalSale + updateTotalSale;
      state.totalSale = updateTotalSale;
    },
    //   nothing require or update the value so no need of payload
  },
});
// exporting the action or the method that will be used in updating the value
export const { orderStart, orderError, orderSuccess, getTotalsSales } =
  orderSlice.actions;
// exporting reducer to use in store
export default orderSlice.reducer;
