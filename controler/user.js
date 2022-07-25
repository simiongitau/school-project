const User = require("../model/User");
exports.getAllUser = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const user = await User.find();
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user does not exist",
    });
  }
  return res.json({ success: true, user });
};

exports.login = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  console.log(req.body);
  const { password, confirm } = req.body;
  if (password !== confirm) {
    return res.status(400).json({ message: "password does not match" });
  }

  // if (password.length < 6) {
  //   return res.status(400).json({ message: false });
  // }
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

exports.updateUser = async (req, res, next) => {
  const { role, id } = req.body;
  // Verifying if role and id is presnt
  if (role && id) {
    // Verifying if the value of role is admin
    if (role === "admin") {
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
    } else {
      res.status(400).json({
        message: "Role is not admin",
      });
    }
  } else {
    res.status(400).json({ message: "Role or Id not present" });
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
