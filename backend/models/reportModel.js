const pool = require("../db");

// Sales Report
exports.getSalesReport = async () => {
  const result = await pool.query(`
    SELECT
      id,
      invoice_no,
      sale_date,
      customer,
      mobile,
      total,
      paid_amount,
      remaining_amount,
      payment_mode
    FROM sales
    ORDER BY sale_date DESC, id DESC
  `);

  return result.rows;
};

// Purchase Report
exports.getPurchaseReport = async () => {
  const result = await pool.query(`
    SELECT *
    FROM purchases
    ORDER BY purchase_date DESC, id DESC
  `);

  return result.rows;
};

// Stock Report
exports.getStockReport = async () => {
  const result = await pool.query(`
    SELECT
      code,
      name,
      weight,
      stock,
      sale_price
    FROM products
    ORDER BY code ASC
  `);

  return result.rows;
};

// Outstanding Report
exports.getOutstandingReport = async () => {
  const result = await pool.query(`
    SELECT
      invoice_no,
      sale_date,
      customer,
      mobile,
      total,
      paid_amount,
      remaining_amount
    FROM sales
    WHERE remaining_amount > 0
    ORDER BY sale_date DESC
  `);

  return result.rows;
};