const pool = require("../db");

// GET All Sell Records
exports.getAllSell = async () => {

  const result = await pool.query(
    `
    SELECT *
    FROM other_sell
    ORDER BY id DESC
    `
  );

  return result.rows;

};

// ADD Sell Record
exports.addSell = async (sell) => {

  const {
    sell_date,
    item_name,
    amount,
  } = sell;

  const result = await pool.query(
    `
    INSERT INTO other_sell
    (
      sell_date,
      item_name,
      amount
    )

    VALUES
    ($1,$2,$3)

    RETURNING *
    `,
    [
      sell_date,
      item_name,
      amount,
    ]
  );

  return result.rows[0];

};

// DELETE Sell Record
exports.deleteSell = async (id) => {

  await pool.query(
    `
    DELETE FROM other_sell
    WHERE id = $1
    `,
    [id]
  );

};