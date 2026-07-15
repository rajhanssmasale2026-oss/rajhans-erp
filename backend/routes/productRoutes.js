const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

// GET Products
router.get("/", productController.getProducts);

// POST Product
router.post("/", productController.addProduct);

module.exports = router;