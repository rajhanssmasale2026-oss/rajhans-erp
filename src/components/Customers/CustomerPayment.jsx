import React, { useContext, useState } from "react";
import { CustomerContext } from "../../context/CustomerContext";

function CustomerPayment() {
  const { customers, receivePayment } =
    useContext(CustomerContext);

  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!customer || !amount) {
      alert("Select customer and enter amount");
      return;
    }

    receivePayment(
      customer,
      Number(amount)
    );

    alert("Payment Added");

    setCustomer("");
    setAmount("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Customer Payment
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <select
          value={customer}
          onChange={(e) =>
            setCustomer(e.target.value)
          }
          className="border rounded p-3"
        >
          <option value="">
            Select Customer
          </option>

          {customers.map((item) => (
            <option
              key={item.id}
              value={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Received Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="border rounded p-3"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 bg-green-600 text-white px-6 py-3 rounded"
      >
        Save Payment
      </button>

    </div>
  );
}

export default CustomerPayment;