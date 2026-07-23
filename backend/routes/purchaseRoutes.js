const express = require("express");

const router = express.Router();

const purchaseController = require("../controllers/purchaseController");

// GET Purchases
router.get("/", purchaseController.getPurchases);

// POST Purchase
router.post("/", purchaseController.addPurchase);

// DELETE Purchase
router.delete(
  "/:id",
  purchaseController.deletePurchase
);

module.exports = router;