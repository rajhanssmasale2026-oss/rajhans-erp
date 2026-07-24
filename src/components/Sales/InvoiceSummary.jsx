import React from "react";

function InvoiceSummary({
  items,
  paidAmount,
  setPaidAmount,
}) {
  if (items.length === 0) return null;

  const totalQty = items.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  const grandTotal = items.reduce(
    (sum, item) => sum + Number(item.total),
    0
  );

  const remainingAmount =
    grandTotal - Number(paidAmount || 0);

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

      <div className="mt-4">
        <label className="block mb-1 font-medium">
          Paid Amount
        </label>

        <input
          type="number"
          value={paidAmount}
          onChange={(e) => {
  console.log("INPUT VALUE =", e.target.value);
  setPaidAmount(Number(e.target.value));
}}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter Paid Amount"
        />
      </div>

      <div className="flex justify-between text-red-600 font-bold mt-4">
        <span>Remaining :</span>
        <span>₹ {remainingAmount}</span>
      </div>

    </div>
  );
}

export default InvoiceSummary;