const express = require("express");

const router = express.Router();

const sellController = require("../controllers/sellController");

// GET All Sell Records
router.get("/", sellController.getAllSell);

// ADD Sell Record
router.post("/", sellController.addSell);

// DELETE Sell Record
router.delete("/:id", sellController.deleteSell);

module.exports = router;