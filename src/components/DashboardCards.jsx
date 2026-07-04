function DashboardCards() {
  const cards = [
    { title: "📦 Products", value: "5", color: "bg-blue-500" },
    { title: "🧾 Sales", value: "₹0", color: "bg-green-500" },
    { title: "🛒 Purchase", value: "₹0", color: "bg-orange-500" },
    { title: "👥 Customers", value: "0", color: "bg-purple-500" },
    { title: "📊 Reports", value: "Ready", color: "bg-red-500" },
    { title: "⚙️ Settings", value: "System", color: "bg-gray-700" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl shadow-lg p-6 hover:scale-105 transition`}
        >
          <h2 className="text-xl font-bold">{card.title}</h2>
          <p className="text-3xl mt-4">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;