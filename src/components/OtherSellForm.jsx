import React, { useContext, useState } from "react";
import { OtherSellContext } from "../context/OtherSellContext";

function OtherSellForm() {
  const { addOtherSale } = useContext(OtherSellContext);

  const [form, setForm] = useState({
    date: "",
    item: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.item || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    addOtherSale({
      ...form,
      amount: Number(form.amount),
    });

    setForm({
      date: "",
      item: "",
      amount: "",
    });

    alert("Sell Added Successfully");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Add Other Sell
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="item"
          placeholder="Item Name"
          value={form.item}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Sell Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-3 rounded"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Save Sell
      </button>

    </div>
  );
}

export default OtherSellForm;