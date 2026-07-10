import React, { useState } from "react";

import CustomerForm from "../components/Customers/CustomerForm";
import CustomerSearch from "../components/Customers/CustomerSearch";
import CustomerTable from "../components/Customers/CustomerTable";
import CustomerPayment from "../components/Customers/CustomerPayment";
import CustomerLedger from "../components/Customers/CustomerLedger";

function Customers() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Customers / ग्राहक
      </h1>

      <CustomerForm />

      <CustomerSearch
        search={search}
        setSearch={setSearch}
      />

      <CustomerTable
        search={search}
      />

      <CustomerPayment />

      <CustomerLedger />

    </div>
  );
}

export default Customers;