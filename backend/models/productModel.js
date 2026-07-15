const pool = require("../db");

async function getAllProducts() {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY id"
  );

  return result.rows;
}

async function addProduct(product) {
  const {
    code,
    name,
    weight,
    purchase_price,
    sale_price,
    stock,
  } = product;

  const result = await pool.query(
    `INSERT INTO products
    (code, name, weight, purchase_price, sale_price, stock)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`,
    [
      code,
      name,
      weight,
      purchase_price,
      sale_price,
      stock,
    ]
  );

  return result.rows[0];
}

module.exports = {
  getAllProducts,
  addProduct,
};