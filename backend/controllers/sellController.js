const sellModel = require("../models/sellModel");

// GET All Sell Records
exports.getAllSell = async (req, res) => {
  try {

    const sell = await sellModel.getAllSell();

    res.json(sell);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};

// ADD Sell Record
exports.addSell = async (req, res) => {
  try {

    const sell = await sellModel.addSell(req.body);

    res.json({
      success: true,
      sell,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};

// DELETE Sell Record
exports.deleteSell = async (req, res) => {
  try {

    await sellModel.deleteSell(req.params.id);

    res.json({
      success: true,
      message: "Sell Record Deleted Successfully",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};