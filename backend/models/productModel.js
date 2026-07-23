const pool = require("../db");

// GET ALL PRODUCTS
async function getAllProducts() {

  const result = await pool.query(
    "SELECT * FROM products ORDER BY id ASC"
  );

  return result.rows;

}

// ADD PRODUCT
async function addProduct(product) {

  const {
    code,
    name,
    weight,
    sale_price,
    stock,
  } = product;

  const result = await pool.query(

    `INSERT INTO products
    (
      code,
      name,
      weight,
      sale_price,
      stock
    )
    VALUES
    ($1,$2,$3,$4,$5)
    RETURNING *`,

    [
      code,
      name,
      weight,
      sale_price,
      stock,
    ]

  );

  return result.rows[0];

}

// DELETE PRODUCT
async function deleteProduct(id) {

  await pool.query(
    `DELETE FROM products
     WHERE id = $1`,
    [id]
  );

}

// STOCK MINUS (SALE)
async function updateStock(id, quantity) {

  const result = await pool.query(

    `UPDATE products
     SET stock = stock - $1
     WHERE id = $2
     RETURNING *`,

    [
      quantity,
      id,
    ]

  );

  return result.rows[0];

}

// STOCK PLUS (ADD STOCK)
async function addStock(id, quantity) {

  const result = await pool.query(

    `UPDATE products
     SET stock = stock + $1
     WHERE id = $2
     RETURNING *`,

    [
      quantity,
      id,
    ]

  );

  return result.rows[0];

}

// UPDATE SALE PRICE
async function updateSalePrice(
  code,
  salePrice
) {

  const result = await pool.query(

    `UPDATE products
     SET sale_price = $1
     WHERE code = $2
     RETURNING *`,

    [
      salePrice,
      code,
    ]

  );

  return result.rows[0];

}

module.exports = {

  getAllProducts,

  addProduct,

  deleteProduct,

  updateStock,

  addStock,

  updateSalePrice,

};