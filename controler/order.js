const Order = require("../model/Order");
exports.getOrder = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  const order = await Order.find();
  if (!order) {
    return res.status(404).json({
      success: false,
      message: "order does not exist",
    });
  }
  return res.json({ success: true, order });
};
// deliting

exports.DeleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "order does not exist",
      });
    }
    return res.json({ success: true, order });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// updating orders
