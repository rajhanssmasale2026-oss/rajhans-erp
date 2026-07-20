import API_URL from "./api";

// GET Sales
export async function getSales() {
  const res = await fetch(`${API_URL}/sales`);
  return await res.json();
}

// ADD Sale
export async function addSale(sale) {
  const res = await fetch(`${API_URL}/sales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sale),
  });

  return await res.json();
}
// RECEIVE PAYMENT
export async function updatePayment(
  saleId,
  paymentAmount,
  paymentMode,
  paymentDate
) {
  const res = await fetch(
    `${API_URL}/sales/${saleId}/payment`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentAmount,
        paymentMode,
        paymentDate,
      }),
    }
  );

  return await res.json();
}