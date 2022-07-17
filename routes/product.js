const express = require("express");
const router = express.Router();
const {
  updateProduct,
  deleteProduct,
  getProducts,
} = require("../controler/product");
router.patch("/updateProduct", updateProduct);
router.delete("/product/delete/:id", deleteProduct);
router.get("/products", getProducts);
module.exports = router;
