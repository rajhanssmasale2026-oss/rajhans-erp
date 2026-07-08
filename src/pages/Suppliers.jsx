import { useEffect, useState } from "react";

import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";
import suppliersData from "../data/suppliers";


function Suppliers() {

  const [suppliers, setSuppliers] = useState(() => {

    const saved =
      localStorage.getItem("suppliers");

    return saved
      ? JSON.parse(saved)
      : suppliersData;

  });


  useEffect(() => {

    localStorage.setItem(
      "suppliers",
      JSON.stringify(suppliers)
    );

  }, [suppliers]);



  const addSupplier = (supplier) => {

    const newSupplier = {

      id: Date.now(),

      ...supplier,

    };


    setSuppliers((prev) => [
      ...prev,
      newSupplier,
    ]);

  };



  const deleteSupplier = (id) => {

    setSuppliers((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };



  return (

    <div className="p-6 bg-gray-100 min-h-screen">


      <h1 className="text-3xl font-bold mb-6">
        Supplier Management
      </h1>



      <SupplierForm
        addSupplier={addSupplier}
      />



      <SupplierTable
        suppliers={suppliers}
        deleteSupplier={deleteSupplier}
      />


    </div>

  );

}


export default Suppliers;