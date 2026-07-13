import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...expense,
      },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((item) => item.id !== id)
    );
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