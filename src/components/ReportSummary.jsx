import { useContext } from "react";

import { SalesContext } from "../context/SalesContext";
import { PurchaseContext } from "../context/PurchaseContext";
import { ExpenseContext } from "../context/ExpenseContext";

function ReportSummary() {

  const { totalSales } = useContext(SalesContext);
  const { totalPurchase } = useContext(PurchaseContext);
  const { totalExpenses } = useContext(ExpenseContext);

  const netProfit =
    totalSales -
    totalPurchase -
    totalExpenses;

  const cards = [

    {
      title: "💰 Total Sales",
      value: `₹ ${totalSales}`,
      color: "bg-green-500",
    },

    {
      title: "🛒 Total Purchase",
      value: `₹ ${totalPurchase}`,
      color: "bg-orange-500",
    },

    {
      title: "💸 Total Expenses",
      value: `₹ ${totalExpenses}`,
      color: "bg-red-500",
    },

    {
      title: "📈 Net Profit",
      value: `₹ ${netProfit}`,
      color: netProfit >= 0
        ? "bg-blue-600"
        : "bg-red-700",
    },

  ];

  return (

    <div className="grid grid-cols-4 gap-6 mb-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl shadow-lg p-6`}
        >

          <h2 className="text-lg font-semibold">
            {card.title}
          </h2>

          <p className="text-3xl font-bold mt-4">
            {card.value}
          </p>

        </div>

      ))}

    </div>

  );
}

export default ReportSummary;