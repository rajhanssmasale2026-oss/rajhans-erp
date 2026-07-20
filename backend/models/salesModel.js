const pool = require("../db");


// Create Sale
const createSale = async (saleData) => {
  const {
    invoiceNumber,
    customerName,
    mobile,
    grandTotal,
    paidAmount,
    remainingAmount,
    paymentMode,
    invoiceDate
  } = saleData;

  const [result] = await pool.query(
    `
    INSERT INTO sales
    (
      invoiceNumber,
      customerName,
      mobile,
      grandTotal,
      paidAmount,
      remainingAmount,
      paymentMode,
      invoiceDate
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      invoiceNumber,
      customerName,
      mobile,
      grandTotal,
      paidAmount,
      remainingAmount,
      paymentMode,
      invoiceDate
    ]
  );

  return result.insertId;
};


// Get All Sales
const getSales = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM sales ORDER BY id DESC"
  );

  return rows;
};


// Get Single Sale
const getSaleById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM sales WHERE id = ?",
    [id]
  );

  return rows[0];
};


// Delete Sale
const deleteSale = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM sales WHERE id = ?",
    [id]
  );

  return result;
};


module.exports = {
  createSale,
  getSales,
  getSaleById,
  deleteSale
};