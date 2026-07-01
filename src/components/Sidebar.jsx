function Sidebar() {
  const menuItems = [
    "🏠 Dashboard",
    "📦 Products",
    "🧾 Sales",
    "🛒 Purchase",
    "👥 Customers",
    "📊 Reports",
    "⚙️ Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item}
            className="p-3 rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;