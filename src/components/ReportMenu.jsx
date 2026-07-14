function ReportMenu() {
  const menus = [
    "💰 Sales",
    "🛒 Purchase",
    "💸 Expense",
    "📈 Profit & Loss",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">

      <div className="flex gap-4 flex-wrap">

        {menus.map((menu) => (

          <button
            key={menu}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            {menu}
          </button>

        ))}

      </div>

    </div>
  );
}

export default ReportMenu;