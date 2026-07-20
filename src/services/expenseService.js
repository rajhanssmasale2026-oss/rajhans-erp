import API_URL from "./api";

// GET All Expenses
export async function getExpenses() {
  const res = await fetch(`${API_URL}/expenses`);
  return await res.json();
}

// ADD Expense
export async function addExpense(expense) {
  const res = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  return await res.json();
}

// DELETE Expense
export async function deleteExpense(id) {
  const res = await fetch(`${API_URL}/expenses/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}