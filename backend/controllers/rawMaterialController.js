const pool = require("../db");


// GET Raw Materials
exports.getRawMaterials = async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM raw_materials ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};


// ADD Raw Material
exports.addRawMaterial = async (req, res) => {

  try {

    const {
      code,
      name,
      unit,
      stock,
      purchase_price
    } = req.body;


    const result = await pool.query(

      `INSERT INTO raw_materials
      (code, name, unit, stock, purchase_price)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,

      [
        code,
        name,
        unit,
        stock,
        purchase_price
      ]

    );


    res.json(result.rows[0]);


  } catch(error) {

    console.error(error);

    res.status(500).json({
      error:error.message
    });

  }

};