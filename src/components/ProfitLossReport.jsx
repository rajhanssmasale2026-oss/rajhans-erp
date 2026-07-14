import { useContext } from "react";

import { SalesContext } from "../context/SalesContext";
import { PurchaseContext } from "../context/PurchaseContext";
import { ExpenseContext } from "../context/ExpenseContext";

function ProfitLossReport() {

  const { totalSales } = useContext(SalesContext);
  const { totalPurchase } = useContext(PurchaseContext);
  const { totalExpenses } = useContext(ExpenseContext);

  const netProfit =
    totalSales -
    totalPurchase -
    totalExpenses;

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6">
        📈 Profit & Loss Report
      </h2>

      <table className="w-full border border-collapse">

        <tbody>

          <tr>
            <td className="border p-3 font-semibold">
              💰 Total Sales
            </td>

            <td className="border p-3">
              ₹ {totalSales}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-semibold">
              🛒 Total Purchase
            </td>

            <td className="border p-3">
              ₹ {totalPurchase}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-semibold">
              💸 Total Expenses
            </td>

            <td className="border p-3">
              ₹ {totalExpenses}
            </td>
          </tr>

          <tr className="bg-green-100">

            <td className="border p-3 text-xl font-bold">
              📈 Net Profit
            </td>

            <td
              className={`border p-3 text-xl font-bold ${
                netProfit >= 0
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              ₹ {netProfit}
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default ProfitLossReport;