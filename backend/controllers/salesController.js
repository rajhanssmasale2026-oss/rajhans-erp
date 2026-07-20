const pool = require("../db");


// GET Sales
exports.getSales = async (req, res) => {
  try {

    const salesResult = await pool.query(
      "SELECT * FROM sales ORDER BY id DESC"
    );

    const sales = salesResult.rows;


    for (const sale of sales) {

      const itemsResult = await pool.query(
        `
        SELECT
          product AS name,
          quantity,
          rate,
          total AS amount
        FROM sale_items
        WHERE sale_id = $1
        `,
        [sale.id]
      );


      sale.items = itemsResult.rows;

    }


    console.log(
      "GET SALES RESPONSE:",
      JSON.stringify(sales, null, 2)
    );


    res.json(sales);


  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};



// ADD Sale
exports.addSale = async (req, res) => {

  console.log("SALE REQUEST RECEIVED:", req.body);

  const client = await pool.connect();

  try {

    await client.query("BEGIN");


    const {
      invoice_no,
      sale_date,
      customer,
      mobile,
      total,
      payment_mode,
      remarks,
      paid_amount,
      remaining_amount,
      items,
    } = req.body;



    // Save Invoice

    const saleResult = await client.query(

      `INSERT INTO sales
      (
        invoice_no,
        sale_date,
        customer,
        mobile,
        total,
        payment_mode,
        remarks,
        paid_amount,
        remaining_amount
      )

      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9)

      RETURNING *`,

      [
        invoice_no,
        sale_date,
        customer,
        mobile,
        total,
        payment_mode,
        remarks,
        paid_amount,
        remaining_amount,
      ]

    );


    const saleId = saleResult.rows[0].id;



    // Save Sale Products

    for (const item of items) {


      await client.query(

        `INSERT INTO sale_items
        (
          sale_id,
          product,
          quantity,
          rate,
          total
        )

        VALUES
        ($1,$2,$3,$4,$5)`,

        [
          saleId,
          item.product,
          item.quantity,
          item.price,
          item.total,
        ]

      );

    }



    await client.query("COMMIT");


    res.json({

      success: true,

      sale: saleResult.rows[0],

    });



  } catch (err) {


    await client.query("ROLLBACK");


    console.error(err);


    res.status(500).json({

      error: err.message,

    });


  } finally {


    client.release();


  }

};
// RECEIVE PAYMENT
exports.receivePayment = async (req, res) => {
  const { id } = req.params;

  const {
    paymentAmount,
    paymentMode,
    paymentDate,
  } = req.body;

  try {
    // आधी invoice काढ
    const result = await pool.query(
      "SELECT * FROM sales WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Sale not found",
      });
    }

    const sale = result.rows[0];

    const newPaid =
      Number(sale.paid_amount) +
      Number(paymentAmount);

    const newRemaining =
      Number(sale.total) - newPaid;

    const updated = await pool.query(
      `
      UPDATE sales
      SET
        paid_amount = $1,
        remaining_amount = $2,
        payment_mode = $3
      WHERE id = $4
      RETURNING *
      `,
      [
        newPaid,
        newRemaining > 0 ? newRemaining : 0,
        paymentMode,
        id,
      ]
    );

    res.json(updated.rows[0]);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};