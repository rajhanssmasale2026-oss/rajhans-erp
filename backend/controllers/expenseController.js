const expenseModel = require("../models/expenseModel");

// GET All Expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await expenseModel.getAllExpenses();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// ADD Expense
exports.addExpense = async (req, res) => {
  try {
    const expense = await expenseModel.addExpense(req.body);
    res.json({
      success: true,
      expense,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// DELETE Expense
exports.deleteExpense = async (req, res) => {
  try {
    await expenseModel.deleteExpense(req.params.id);

    res.json({
      success: true,
      message: "Expense Deleted Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};