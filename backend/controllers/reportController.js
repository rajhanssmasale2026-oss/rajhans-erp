const reportModel = require("../models/reportModel");

// Sales Report
exports.getSalesReport = async (req, res) => {
  try {
    const data = await reportModel.getSalesReport();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// Purchase Report
exports.getPurchaseReport = async (req, res) => {
  try {
    const data = await reportModel.getPurchaseReport();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// Stock Report
exports.getStockReport = async (req, res) => {
  try {
    const data = await reportModel.getStockReport();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// Outstanding Report
exports.getOutstandingReport = async (req, res) => {
  try {
    const data = await reportModel.getOutstandingReport();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};