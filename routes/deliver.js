const express = require("express");
const router = express.Router();
const {
  getDeliverly,
  updateDeliverly,
  DeleteDeliverly,
} = require("../controler/deliver");
router.get("/deliver", getDeliverly);
// updating the deliverli information
router.patch("/deliver/update/:id", updateDeliverly);
// delete method
router.delete("/deliver/delete/:id", DeleteDeliverly);

//  exp
module.exports = router;
