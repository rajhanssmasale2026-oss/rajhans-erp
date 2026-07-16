const pool = require("../db");

// GET Purchases
exports.getPurchases = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM purchases ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};


// ADD Purchase
exports.addPurchase = async (req, res) => {

  try {

    const {
      purchase_date,
      bill_no,
      supplier,
      material,
      quantity,
      rate,
      total,
      remarks,
    } = req.body;

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
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
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

    res.json(result.rows[0]);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }

};