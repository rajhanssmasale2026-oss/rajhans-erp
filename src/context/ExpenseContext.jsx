import { createContext, useEffect, useState } from "react";

import {
  getExpenses,
  addExpense as addExpenseAPI,
  deleteExpense as deleteExpenseAPI,
} from "../services/expenseService";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await getExpenses();

        if (Array.isArray(data)) {
          setExpenses(data);
        }
      } catch (err) {
        console.error("Error loading expenses:", err);
      }
    }

    loadExpenses();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await addExpenseAPI(expense);

      setExpenses((prev) => [
        response.expense,
        ...prev,
      ]);
    } catch (err) {
      console.error("Add Expense Error:", err);
      alert("Expense Save Failed");
    }
  };

  const deleteExpense = async (id) => {
    try {
      await deleteExpenseAPI(id);

      setExpenses((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (err) {
      console.error("Delete Expense Error:", err);
    }
  };

  const totalExpenses = expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        totalExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}