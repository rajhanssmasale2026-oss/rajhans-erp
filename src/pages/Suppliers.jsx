import { useState } from "react";
import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";
import suppliersData from "../data/suppliers";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState(suppliersData);

  const addSupplier = (supplier) => {
    setSuppliers([
      ...suppliers,
      {
        id: Date.now(),
        ...supplier,
      },
    ]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">
        Supplier Management
      </h1>

      <SupplierForm addSupplier={addSupplier} />

      <SupplierTable suppliers={suppliers} />
    </div>
  );
}