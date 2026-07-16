import API_URL from "./api";

// GET Purchases
export async function getPurchases() {
  const res = await fetch(`${API_URL}/purchases`);
  return await res.json();
}

// ADD Purchase
export async function addPurchase(purchase) {
  const res = await fetch(`${API_URL}/purchases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchase),
  });

  return await res.json();
}