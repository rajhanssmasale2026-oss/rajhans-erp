import React from "react";

function InvoiceSummary({ items }) {
  if (items.length === 0) return null;

  const totalQty = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const grandTotal = items.reduce(
    (sum, item) => sum + item.total,
    0
  );

  return (
    <div className="mt-5 border rounded-lg p-4 bg-gray-50">

      <div className="flex justify-between mb-2">
        <span className="font-semibold">
          Total Quantity
        </span>

        <span>{totalQty}</span>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Grand Total</span>

        <span>₹ {grandTotal}</span>
      </div>

    </div>
  );
}

export default InvoiceSummary;