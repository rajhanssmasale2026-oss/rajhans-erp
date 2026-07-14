function ReportMenu({
  activeReport,
  setActiveReport,
}) {

  const menus = [

    {
      id: "sales",
      label: "💰 Sales",
    },

    {
      id: "purchase",
      label: "🛒 Purchase",
    },

    {
      id: "expense",
      label: "💸 Expense",
    },

    {
      id: "profit",
      label: "📈 Profit & Loss",
    },

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">

      <div className="flex gap-4 flex-wrap">

        {menus.map((menu) => (

          <button
            key={menu.id}
            onClick={() =>
              setActiveReport(menu.id)
            }
            className={`px-5 py-3 rounded-lg font-semibold transition ${
              activeReport === menu.id
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {menu.label}
          </button>

        ))}

      </div>

    </div>

  );

}

export default ReportMenu;