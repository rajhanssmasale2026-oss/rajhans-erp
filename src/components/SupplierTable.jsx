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
            <th className="border p-2">Products</th>
            <th className="border p-2">Total Qty</th>
            <th className="border p-2">Grand Total</th>
          </tr>
        </thead>

        <tbody>
          {sales.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="border p-4 text-center"
              >
                No Sales Found
              </td>
            </tr>
          ) : (
            sales.map((sale) => (
              <tr key={sale.id}>
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

                <td className="border p-2">
                  {sale.products?.map((item) => (
                    <div key={item.product}>
                      {item.product} ({item.quantity} × ₹{item.price})
                    </div>
                  ))}
                </td>

                <td className="border p-2 text-center">
                  {sale.products?.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                </td>

                <td className="border p-2 text-right font-semibold">
                  ₹ {sale.totalAmount}
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