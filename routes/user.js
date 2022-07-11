const express = require("express");
const router = express.Router();
// import
const {
  getAllUser,
  getSpecifiicUser,
  createUser,
  updateUser,
  DeleteUser,
  userPay,
} = require("../controler/user");

// fetching user data
router.get("/user", getAllUser);
// ftching one user
router.get("/user/:id", getSpecifiicUser);
// user
router.post("/user", createUser);

// updating the user
router.patch("/user/update/:id", updateUser);

// delete method
router.delete("/user/delete/:id", DeleteUser);
router.post("/user/successBuy", userPay);
//  exp
module.exports = router;
