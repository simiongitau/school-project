const express = require("express");
const router = express.Router();
const { updateProduct } = require("../controler/product");
router.get("/updateProduct", updateProduct);
module.exports = router;
