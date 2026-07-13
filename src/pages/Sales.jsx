import React from "react";

import SalesForm from "../components/SalesForm";
import SalesTable from "../components/SalesTable";

function Sales() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Sales / विक्री
      </h1>

      <SalesForm />

      <div className="mt-8">
        <SalesTable />
      </div>

    </div>
  );
}

export default Sales;