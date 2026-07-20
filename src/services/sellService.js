import API_URL from "./api";

// GET Sell Records
export async function getSell() {
  const res = await fetch(`${API_URL}/sell`);
  return await res.json();
}

// ADD Sell Record
export async function addSell(sell) {
  const res = await fetch(`${API_URL}/sell`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sell),
  });

  return await res.json();
}

// DELETE Sell Record
export async function deleteSell(id) {
  const res = await fetch(`${API_URL}/sell/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}