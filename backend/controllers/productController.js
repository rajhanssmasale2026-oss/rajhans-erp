const productModel = require("../models/productModel");


// GET Products
async function getProducts(req, res) {

  try {

    const products =
      await productModel.getAllProducts();

    res.json(products);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }

}


// ADD Product
async function addProduct(req, res) {

  try {

    const product =
      await productModel.addProduct(req.body);

    res.status(201).json(product);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }

}


// STOCK MINUS (SALE)
async function updateStock(req, res) {

  try {

    const {
      id,
      quantity,
    } = req.body;


    const product =
      await productModel.updateStock(
        id,
        quantity
      );


    res.json(product);


  } catch (err) {

    console.error(err);


    res.status(500).json({
      error: err.message,
    });

  }

}



// STOCK PLUS (ADD STOCK)
async function addStock(req, res) {

  try {

    const {
      id,
      quantity,
    } = req.body;


    const product =
      await productModel.addStock(
        id,
        quantity
      );


    res.json(product);


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

  updateStock,

  addStock,

};