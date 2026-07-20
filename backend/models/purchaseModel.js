const pool = require("../db");


// GET ALL PURCHASES
async function getAllPurchases() {

  const result = await pool.query(
    "SELECT * FROM purchases ORDER BY id DESC"
  );

  return result.rows;

}


// ADD PURCHASE
async function addPurchase(purchase) {

  const {
    purchase_date,
    bill_no,
    supplier,
    material,
    quantity,
    rate,
    total,
    remarks,
  } = purchase;


  const result = await pool.query(

    `INSERT INTO purchases
    (
      purchase_date,
      bill_no,
      supplier,
      material,
      quantity,
      rate,
      total,
      remarks
    )

    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8)

    RETURNING *`,

    [
      purchase_date,
      bill_no,
      supplier,
      material,
      quantity,
      rate,
      total,
      remarks,
    ]

  );


  return result.rows[0];

}



module.exports = {

  getAllPurchases,

  addPurchase,

};