import React, { useContext, useState } from "react";
import { CustomerContext } from "../../context/CustomerContext";

function CustomerForm() {
  const { addCustomer } = useContext(CustomerContext);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !customer.name ||
      !customer.address ||
      !customer.mobile
    ) {
      alert("Please fill all details");
      return;
    }

    addCustomer(customer);

    setCustomer({
      name: "",
      address: "",
      mobile: "",
    });

    alert("Customer Added Successfully");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">
        Add Customer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={customer.name}
          onChange={handleChange}
          className="border rounded p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={customer.address}
          onChange={handleChange}
          className="border rounded p-3"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={customer.mobile}
          onChange={handleChange}
          className="border rounded p-3"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 bg-green-600 text-white px-6 py-3 rounded"
      >
        Add Customer
      </button>
    </div>
  );
}

export default CustomerForm;