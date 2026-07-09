import React, { useContext } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesTable() {
  const { sales } = useContext(SalesContext);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Sales History / विक्री नोंद
      </h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Invoice</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Rate</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {sales.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className="border p-4 text-center"
              >
                No Sales Found
              </td>
            </tr>
          ) : (
            sales.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">
                  {item.invoice}
                </td>

                <td className="border p-2">
                  {item.date}
                </td>

                <td className="border p-2">
                  {item.customer}
                </td>

                <td className="border p-2">
                  {item.mobile}
                </td>

                <td className="border p-2">
                  {item.product}
                </td>

                <td className="border p-2 text-center">
                  {item.quantity}
                </td>

                <td className="border p-2 text-right">
                  ₹ {item.price}
                </td>

                <td className="border p-2 text-right font-semibold">
                  ₹ {item.total}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;