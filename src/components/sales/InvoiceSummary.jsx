import React from "react";

function InvoiceSummary({ items }) {
  if (items.length === 0) return null;

  const totalQty = items.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  const grandTotal = items.reduce(
    (sum, item) => sum + Number(item.total),
    0
  );

  return (
    <div className="mt-6 bg-gray-100 rounded-lg p-4">

      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-bold">
          Invoice Summary
        </h3>
      </div>

      <div className="flex justify-between">
        <span>Total Items :</span>
        <span>{items.length}</span>
      </div>

      <div className="flex justify-between">
        <span>Total Quantity :</span>
        <span>{totalQty}</span>
      </div>

      <div className="flex justify-between text-xl font-bold mt-3 border-t pt-3">
        <span>Grand Total :</span>
        <span>₹ {grandTotal}</span>
      </div>

    </div>
  );
}

export default InvoiceSummary;