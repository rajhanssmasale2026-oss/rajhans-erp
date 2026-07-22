const express = require("express");

const router = express.Router();

const settingsController = require("../controllers/settingsController");

// Get Business Information
router.get(
  "/",
  settingsController.getBusinessInfo
);

// Save / Update Business Information
router.post(
  "/",
  settingsController.saveBusinessInfo
);

module.exports = router;