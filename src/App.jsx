import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-6">
            Welcome to Rajhans ERP 👋
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold">📦 Products</h3>
              <p className="text-gray-600 mt-2">5 Products Added</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold">🧾 Sales</h3>
              <p className="text-gray-600 mt-2">Today's Sales: ₹0</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold">🛒 Purchase</h3>
              <p className="text-gray-600 mt-2">No Purchases Yet</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold">👥 Customers</h3>
              <p className="text-gray-600 mt-2">0 Customers</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;