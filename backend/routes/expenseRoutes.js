const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expenseController");

// GET All Expenses
router.get("/", expenseController.getAllExpenses);

// ADD Expense
router.post("/", expenseController.addExpense);

// DELETE Expense
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;