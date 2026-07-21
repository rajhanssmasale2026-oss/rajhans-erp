import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import RawMaterials from "./pages/RawMaterials";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import OtherSell from "./pages/OtherSell";
import Reports from "./pages/Reports";
import Backup from "./pages/Backup";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Owner */}
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/purchase"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Purchase />
          </ProtectedRoute>
        }
      />

      <Route
        path="/raw-materials"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <RawMaterials />
          </ProtectedRoute>
        }
      />

      <Route
        path="/suppliers"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Suppliers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/expenses"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Expenses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/other-sell"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <OtherSell />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/backup"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <Backup />
          </ProtectedRoute>
        }
      />

      {/* Products : Owner + Production */}
      <Route
        path="/products"
        element={
          <ProtectedRoute
            allowedRoles={["owner", "production"]}
          >
            <Products />
          </ProtectedRoute>
        }
      />

      {/* Sales : Owner + Sales */}
      <Route
        path="/sales"
        element={
          <ProtectedRoute
            allowedRoles={["owner", "sales"]}
          >
            <Sales />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;