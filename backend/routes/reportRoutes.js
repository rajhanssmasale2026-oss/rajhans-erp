const express = require("express");

const router = express.Router();

const reportController = require("../controllers/reportController");

// Sales Report
router.get("/sales", reportController.getSalesReport);

// Purchase Report
router.get("/purchase", reportController.getPurchaseReport);

// Stock Report
router.get("/stock", reportController.getStockReport);

// Outstanding Report
router.get("/outstanding", reportController.getOutstandingReport);

module.exports = router;