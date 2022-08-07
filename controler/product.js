const Product = require("../model/ImageFold");
// updating product
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product does not exist",
      });
    }
    return res.json({ success: true, product });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product does not exist",
      });
    }
    return res.json({ success: true, product });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getProducts = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const product = await Product.find();
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product does not exist",
    });
  }
  return res.json({ success: true, product });
};
// get specific product
exports.getproductSpecific = async (req, res) => {
  console.log(req.params.productID);
  Product.findOne({ _id: req.params.productID }, function (err, response) {
    if (response) {
      res.send(response);
    } else {
      res.send("No product matching that id was found.");
    }
  });
};
