const purchaseModel = require("../models/purchaseModel");


// GET Purchases
async function getPurchases(req, res) {

  try {

    const purchases =
      await purchaseModel.getAllPurchases();

    res.json(purchases);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }

}



// ADD Purchase
async function addPurchase(req, res) {

  try {

    const purchase =
      await purchaseModel.addPurchase(req.body);


    res.status(201).json(purchase);


  } catch (err) {

    console.error(err);


    res.status(500).json({
      error: err.message,
    });

  }

}



module.exports = {

  getPurchases,

  addPurchase,

};