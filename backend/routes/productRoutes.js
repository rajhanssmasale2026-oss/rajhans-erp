const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");


// GET Products
router.get(
  "/",
  productController.getProducts
);


// ADD Product
router.post(
  "/",
  productController.addProduct
);


// STOCK MINUS (SALE)
router.put(
  "/stock",
  productController.updateStock
);


// STOCK PLUS (ADD STOCK)
router.put(
  "/add-stock",
  productController.addStock
);


module.exports = router;