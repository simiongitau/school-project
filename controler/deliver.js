const Deliver = require("../model/Deliver");
exports.getDeliverly = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  const deliver = await Deliver.find();
  if (!deliver) {
    return res.status(404).json({
      success: false,
      message: "deliverly does not exist",
    });
  }
  return res.json({ success: true, deliver });
};
// updating
exports.updateDeliverly = async (req, res) => {
  try {
    const deliver = await Deliver.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!deliver) {
      return res.status(404).json({
        success: false,
        message: "deliverly does not exist",
      });
    }
    return res.json({ success: true, deliver });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// deliting

exports.DeleteDeliverly = async (req, res) => {
  try {
    const deliver = await Deliver.findByIdAndDelete(req.params.id);
    if (!deliver) {
      return res.status(404).json({
        success: false,
        message: "deliverly does not exist",
      });
    }
    return res.json({ success: true, deliver });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
