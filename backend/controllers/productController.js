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

// DELETE Product
async function deleteProduct(req, res) {

  try {

    const { id } = req.params;

    await productModel.deleteProduct(id);

    res.json({
      success: true,
      message: "Product Deleted Successfully",
    });

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
// UPDATE SALE PRICE
async function updateSalePrice(req, res) {

  try {

    const {
      code,
      salePrice,
    } = req.body;

    const product =
      await productModel.updateSalePrice(
        code,
        salePrice
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

  deleteProduct,

  updateStock,

  addStock,

  updateSalePrice,

};