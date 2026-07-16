import API_URL from "./api";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return await res.json();
}

export async function addProduct(product) {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await res.json();
}