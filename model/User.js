const mongoose = require("mongoose");
const validator = require("validator");

// schema
// document,collection,database
const userSchema = mongoose.Schema({
  // object describing the shape of document
  // includig validation
  role: {
    type: String,
    minlenth: 3,
    maxlength: 20,
    required: true,
    default: "user",
  },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is not valid`);
      }
    },
  },
  confirm: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});
// model is used to store data in database
const User = mongoose.model("User", userSchema);
// exporting
module.exports = User;
