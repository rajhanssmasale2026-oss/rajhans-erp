import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import RawMaterials from "./pages/RawMaterials";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import OtherSell from "./pages/OtherSell";


function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/purchase"
        element={<Purchase />}
      />

      <Route
        path="/raw-materials"
        element={<RawMaterials />}
      />

      <Route
        path="/suppliers"
        element={<Suppliers />}
      />

      <Route
        path="/sales"
        element={<Sales />}
      />

      <Route
        path="/expenses"
        element={<Expenses />}
      />

      <Route
        path="/other-sell"
        element={<OtherSell />}
      />

    </Routes>

  );

}

export default App;