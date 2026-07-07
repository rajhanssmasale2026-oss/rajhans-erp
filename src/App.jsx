import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import RawMaterials from "./pages/RawMaterials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/raw-materials" element={<RawMaterials />} />
    </Routes>
  );
}

export default App;