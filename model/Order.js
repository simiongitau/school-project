const mongoose = require("mongoose");
const validator = require("validator");
// creating the blue print for the tasks
const orderSchema = new mongoose.Schema(
  {
    // validation
    paid: { type: String },
    paymentID: { type: String },
    recipient_name: { type: String },
    email: {
      type: String,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error(`Email is not valid`);
        }
      },
    },
    total: { type: String },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
