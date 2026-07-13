import React, { useState } from "react";

function PaymentModal({
  sale,
  onClose,
  onSave,
}) {

  const [paymentDate, setPaymentDate] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [mode, setMode] =
    useState("Cash");

  if (!sale) return null;

  const handleSave = () => {

    const payment =
      Number(amount);

    if (!paymentDate) {
      alert("Select Payment Date");
      return;
    }

    if (!payment || payment <= 0) {
      alert("Enter valid payment amount");
      return;
    }

    if (payment > sale.balanceAmount) {
      alert("Payment cannot exceed Balance");
      return;
    }

    onSave(
      payment,
      mode,
      paymentDate
    );

    setPaymentDate("");
    setAmount("");
    setMode("Cash");

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[450px] p-6">

        <h2 className="text-2xl font-bold mb-5">
          Receive Payment
        </h2>

        <div className="space-y-4">

          <p>
            <strong>Invoice :</strong> {sale.invoice}
          </p>

          <p>
            <strong>Customer :</strong> {sale.customer}
          </p>

          <p>
            <strong>Total Bill :</strong> ₹ {sale.totalAmount}
          </p>

          <p>
            <strong>Paid :</strong> ₹ {sale.paidAmount}
          </p>

          <p className="text-red-600 font-bold">
            Balance : ₹ {sale.balanceAmount}
          </p>

          <input
            type="date"
            value={paymentDate}
            onChange={(e) =>
              setPaymentDate(
                e.target.value
              )
            }
            className="w-full border rounded p-3"
          />

          <input
            type="number"
            placeholder="Payment Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
            className="w-full border rounded p-3"
          />

          <select
            value={mode}
            onChange={(e) =>
              setMode(
                e.target.value
              )
            }
            className="w-full border rounded p-3"
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-gray-500 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded bg-green-600 text-white"
          >
            Save Payment
          </button>

        </div>

      </div>

    </div>

  );

}

export default PaymentModal;