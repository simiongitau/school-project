const mongoose = require("mongoose");
const validator = require("validator");

// schema
// document,collection,database
const userSchema = mongoose.Schema({
  // object describing the shape of document
  // includig validation
  name: {
    type: String,
    minlenth: 3,
    maxlength: 20,
    required: true,
  },

  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error(`age cannot be less than 18`);
      }
    },
  },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is not valid`);
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  history: {
    type: Array,
    default: [],
  },
});
// model is used to store data in database
const User = mongoose.model("user", userSchema);
// exporting
module.exports = User;
