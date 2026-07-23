const pool = require("../db");

// Get All Expenses
exports.getAllExpenses = async () => {

  const result = await pool.query(`

    SELECT
      id,
      TO_CHAR(expense_date, 'YYYY-MM-DD') AS expense_date,
      category,
      description,
      amount,
      created_at
    FROM expenses
    ORDER BY expense_date DESC, id DESC

  `);

  return result.rows;

};

// Add Expense
exports.addExpense = async (expense) => {

  const {
    expense_date,
    category,
    description,
    amount,
  } = expense;

  const result = await pool.query(

    `
    INSERT INTO expenses
    (
      expense_date,
      category,
      description,
      amount
    )

    VALUES
    ($1,$2,$3,$4)

    RETURNING *
    `,

    [
      expense_date,
      category,
      description,
      amount,
    ]

  );

  return result.rows[0];

};

// Delete Expense
exports.deleteExpense = async (id) => {

  await pool.query(

    `
    DELETE FROM expenses
    WHERE id = $1
    `,

    [id]

  );

};