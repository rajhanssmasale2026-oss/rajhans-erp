const settingsModel = require("../models/settingsModel");

// Get Business Information
exports.getBusinessInfo = async (req, res) => {

  try {

    const data =
      await settingsModel.getBusinessInfo();

    res.json(data || {});

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Save / Update Business Information
exports.saveBusinessInfo = async (req, res) => {

  try {

    const result =
      await settingsModel.saveBusinessInfo(
        req.body
      );

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};