const mongoose = require("mongoose");
const validator = require("validator");
// creating the blue print for the tasks
const deliverlySchema = new mongoose.Schema({
  // validation
  paymentID: { type: String },
  quantity: { type: Number },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is not valid`);
      }
    },
  },
  telphone_number: { type: Number },
  county: { type: String },
  location: { type: String },
  product: {
    type: Array,
  },
  status: {
    type: String,
    default: false,
  },
});
const Deliver = mongoose.model("Deliver", deliverlySchema);
module.exports = Deliver;
