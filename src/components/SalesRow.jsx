import React from "react";
import { generateInvoicePDF } from "../utils/generateInvoicePDF";

function SalesRow({
  sale,
  onReceivePayment,
}) {
  return (
    <tr>

      <td className="border p-2">
        {sale.invoice}
      </td>

      <td className="border p-2">
        {sale.date}
      </td>

      <td className="border p-2">
        {sale.customer}
      </td>

      <td className="border p-2">
        {sale.mobile}
      </td>

      <td className="border p-2 text-right">
        ₹ {sale.totalAmount}
      </td>

      <td className="border p-2 text-right text-green-700 font-semibold">
        ₹ {sale.paidAmount}
      </td>

      <td className="border p-2 text-right text-red-600 font-semibold">
        ₹ {sale.balanceAmount}
      </td>

      <td className="border p-2 text-center">

        {sale.paymentStatus === "Paid" ? (

          <span className="bg-green-600 text-white px-3 py-1 rounded">
            Paid
          </span>

        ) : (

          <span className="bg-yellow-500 text-white px-3 py-1 rounded">
            Pending
          </span>

        )}

      </td>

      <td className="border p-2 text-center">

        <button
          onClick={() => onReceivePayment(sale)}
          disabled={sale.balanceAmount === 0}
          className={`px-3 py-1 rounded text-white ${
            sale.balanceAmount === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {sale.balanceAmount === 0
            ? "Paid"
            : "Receive"}
        </button>

      </td>

      <td className="border p-2 text-center">

        <button
          onClick={() =>
            generateInvoicePDF(sale)
          }
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        >
          PDF
        </button>

      </td>

    </tr>
  );
}

export default SalesRow;