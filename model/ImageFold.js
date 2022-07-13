const mongoose = require("mongoose");
// creating the blue print for the tasks
const imgSchema = new mongoose.Schema({
  // validation
  name: { type: String },
  price: { type: Number },
  desc: { type: String },
  instore: { type: String },

  productImage: { type: String },
});
const Image = mongoose.model("Image", imgSchema);
module.exports = Image;
