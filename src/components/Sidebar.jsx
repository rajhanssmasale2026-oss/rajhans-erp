import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "🏠", name: "Dashboard", path: "/dashboard" },
    { icon: "📦", name: "Products", path: "/products" },
    { icon: "🧾", name: "Sales", path: "/sales" },
    { icon: "🛒", name: "Purchase", path: "/purchase" },
    { icon: "👥", name: "Customers", path: "/customers" },
    { icon: "🏭", name: "Suppliers", path: "/suppliers" },
    { icon: "📊", name: "Reports", path: "/reports" },
    { icon: "⚙️", name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">

      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-orange-400">
          🌶️ Rajhans Masale
        </h2>

        <p className="text-sm text-gray-300">
          ERP Version 1.0
        </p>
      </div>


      <ul className="flex-1 p-4 space-y-2">

        {menuItems.map((item, index) => (

          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
              index === 0
                ? "bg-orange-500 text-white"
                : "hover:bg-blue-600"
            }`}
          >

            <span className="mr-3">
              {item.icon}
            </span>

            {item.name}

          </li>

        ))}

      </ul>


      <div className="p-4 border-t border-gray-700 text-center text-sm text-gray-400">
        Developed for Rajhans Masale ❤️
      </div>

    </aside>
  );
}

export default Sidebar;