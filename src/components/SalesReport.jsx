import { useContext } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesReport() {

  const { sales } = useContext(SalesContext);

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        💰 Sales Report
      </h2>

      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-3">Invoice</th>

            <th className="border p-3">Date</th>

            <th className="border p-3">Customer</th>

            <th className="border p-3">Amount</th>

            <th className="border p-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {sales.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="border p-5 text-center"
              >
                No Sales Found
              </td>

            </tr>

          ) : (

            sales.map((sale) => (

              <tr key={sale.id}>

                <td className="border p-3">
                  {sale.invoiceNo || "-"}
                </td>

                <td className="border p-3">
                  {sale.date}
                </td>

                <td className="border p-3">
                  {sale.customerName}
                </td>

                <td className="border p-3">
                  ₹ {sale.totalAmount}
                </td>

                <td className="border p-3">
                  {sale.paymentStatus}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default SalesReport;