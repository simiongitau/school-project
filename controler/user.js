const User = require("../model/User");
const Payment = require("../model/Payment");
exports.getAllUser = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  const user = await User.find();
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user does not exist",
    });
  }
  return res.json({ success: true, user });
};

exports.getSpecifiicUser = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  console.log(req.params.id);
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user does not exist",
    });
  }
  return res.json({ success: true, user });
};

exports.createUser = async (req, res) => {
  console.log(res.body);
  // creating new object
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.userPay = async (req, res) => {
  // let history = [];
  // let transactionData = {};
  // req.body.cartDetail.forEach((items) => {
  //   history.push({
  //     dateOfpurchase: Date.now(),
  //     name: items.name,
  //     id: items.id,
  //     price: items.price,
  //     quantity: items.quantity,
  //     paymentId: req.body.paymentData.paymentID,
  //   });
  //   //  payment information
  //   // transactionData.user = {
  //   //   id: req.user._id,
  //   //   name: req.user.name,
  //   //   lastname: req.user.lastname,
  //   //   email: req.user.email,
  //   // };
  //   transactionData.data = req.body.paymentData;
  //   transactionData.product = history;

  //   // updating the array in user
  //   User.findOneAndUpdate(
  //     { _id: 1 },
  //     { $push: { history: history } },
  //     { new: true },
  //     (err, user) => {
  //       if (err) return res.json({ success: false, err });
  //       const payment = new Payment(transactionData);
  //       payment.save((err, doc) => {
  //         if (err) return res.json({ success: false.valueOf, err });
  //       });
  //     }
  //   );
  // });
  console.log(req.body);
};
