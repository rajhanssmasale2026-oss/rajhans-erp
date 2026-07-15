const productModel = require("../models/productModel");

async function getProducts(req, res) {
  try {
    const products = await productModel.getAllProducts();

    res.json(products);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
}

async function addProduct(req, res) {
  try {

    const product = await productModel.addProduct(req.body);

    res.status(201).json(product);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
}

module.exports = {
  getProducts,
  addProduct,
};