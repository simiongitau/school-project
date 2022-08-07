const express = require("express");
const router = express.Router();
const {
  updateProduct,
  deleteProduct,
  getProducts,
  getproductSpecific,
} = require("../controler/product");
router.patch("/updateProduct", updateProduct);
router.delete("/product/delete/:id", deleteProduct);
router.get("/products", getProducts);
router.get("/product/:productID", getproductSpecific);
module.exports = router;
