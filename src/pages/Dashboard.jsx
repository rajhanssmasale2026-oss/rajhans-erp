import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

            <h1 className="text-4xl font-bold text-gray-800">
              👋 Welcome to Rajhans ERP
            </h1>

            <p className="text-gray-500 mt-2">
              Rajhans Masale Business Management System
            </p>

          </div>

          <DashboardCards />

          <div className="grid grid-cols-2 gap-6 mt-6">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                📊 Today's Summary
              </h2>

              <ul className="space-y-3">
                <li>💰 Today's Sales : ₹0</li>
                <li>🛒 Purchase : ₹0</li>
                <li>📦 Available Stock : 5 Products</li>
                <li>👥 Customers : 0</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                🔔 Notifications
              </h2>

              <ul className="space-y-3">
                <li>✅ ERP Started Successfully</li>
                <li>📦 Products Module Ready</li>
                <li>🧾 Sales Module Coming Soon</li>
                <li>📈 Reports Module Coming Soon</li>
              </ul>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;