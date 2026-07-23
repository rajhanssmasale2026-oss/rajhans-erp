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

// DELETE Product
router.delete(
  "/:id",
  productController.deleteProduct
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

// UPDATE SALE PRICE
router.put(
  "/price",
  productController.updateSalePrice
);

module.exports = router;