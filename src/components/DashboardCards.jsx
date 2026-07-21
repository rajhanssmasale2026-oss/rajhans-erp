import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { SalesContext } from "../context/SalesContext";
import { PurchaseContext } from "../context/PurchaseContext";

function DashboardCards() {
  const { products } = useContext(ProductContext);

  const {
    sales,
    totalSales,
  } = useContext(SalesContext);

  const { totalPurchase } =
    useContext(PurchaseContext);

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, item) =>
      total + Number(item.stock || 0),
    0
  );

  const totalCustomers = [
    ...new Set(
      sales.map(
        (sale) =>
          sale.customerName ||
          sale.customer ||
          ""
      )
    ),
  ].filter(Boolean).length;

  const cards = [
    {
      title: "📦 Products",
      value: totalProducts,
      color: "bg-blue-500",
    },

    {
      title: "📊 Total Stock",
      value: totalStock,
      color: "bg-green-500",
    },

    {
      title: "🧾 Sales",
      value: `₹ ${totalSales}`,
      color: "bg-orange-500",
    },

    {
      title: "👥 Customers",
      value: totalCustomers,
      color: "bg-purple-500",
    },

    {
      title: "🛒 Purchase",
      value: `₹ ${totalPurchase}`,
      color: "bg-red-500",
    },

    {
      title: "⚙️ Settings",
      value: "System",
      color: "bg-gray-700",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl shadow-lg p-6 hover:scale-105 transition`}
        >
          <h2 className="text-xl font-bold">
            {card.title}
          </h2>

          <p className="text-3xl mt-4">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;