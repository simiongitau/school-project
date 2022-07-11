const mongoose = require("mongoose");
// creating the blue print for the tasks
const paymentSchema = new mongoose.Schema(
  {
    // validation
    user: {
      type: Array,
      default: [],
    },
    data: {
      type: Array,
      default: [],
    },
    product: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
