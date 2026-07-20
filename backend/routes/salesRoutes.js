const express = require("express");

const router = express.Router();

const salesController = require("../controllers/salesController");

// GET Sales
router.get("/", salesController.getSales);

// POST Sale
router.post("/", salesController.addSale);
router.put("/:id/payment", salesController.receivePayment);

module.exports = router;