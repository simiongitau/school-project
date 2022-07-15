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
