import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const navigate = useNavigate();

  const [openOthers, setOpenOthers] = useState(false);


  const menuItems = [
    { icon: "🏠", name: "Dashboard", path: "/dashboard" },
    { icon: "📦", name: "Products", path: "/products" },
    { icon: "🧾", name: "Sales", path: "/sales" },
    { icon: "🛒", name: "Purchase", path: "/purchase" },
    { icon: "👥", name: "Customers", path: "/customers" },
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


        {menuItems.map((item) => (

          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className="p-3 rounded-lg cursor-pointer hover:bg-blue-600"
          >

            <span className="mr-3">
              {item.icon}
            </span>

            {item.name}

          </li>

        ))}



        {/* Others Menu */}

        <li>


          <div
            onClick={() => setOpenOthers(!openOthers)}
            className="p-3 rounded-lg cursor-pointer hover:bg-blue-600"
          >

            <span className="mr-3">
              📁
            </span>

            Others

            <span className="float-right">
              {openOthers ? "▲" : "▼"}
            </span>

          </div>



          {openOthers && (

            <ul className="ml-6 mt-2 space-y-2">


              <li
                onClick={() => navigate("/expenses")}
                className="p-2 rounded cursor-pointer hover:bg-green-600"
              >
                💸 Expenses
              </li>


              <li
                onClick={() => navigate("/other-sell")}
                className="p-2 rounded cursor-pointer hover:bg-green-600"
              >
                💰 Sell
              </li>


            </ul>

          )}


        </li>


      </ul>


      <div className="p-4 border-t border-gray-700 text-center text-sm text-gray-400">

        Developed for Rajhans Masale ❤️

      </div>


    </aside>

  );

}

export default Sidebar;