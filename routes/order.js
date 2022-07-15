const express = require("express");
const router = express.Router();
const { getOrder, DeleteOrder } = require("../controler/order");

// fetching user data
router.get("/order", getOrder);
// delete method
router.delete("/order/delete/:id", DeleteOrder);

//  exp
module.exports = router;
