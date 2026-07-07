import { useState } from "react";

export default function SupplierForm({ addSupplier }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    gst: "",
    address: "",
    material: "",
    openingBalance: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.mobile) {
      alert("Supplier Name आणि Mobile भरा");
      return;
    }

    addSupplier({
      ...form,
      openingBalance: Number(form.openingBalance),
    });

    setForm({
      name: "",
      mobile: "",
      gst: "",
      address: "",
      material: "",
      openingBalance: "",
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Add Supplier</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Supplier Name"
          className="border p-2 rounded"
        />

        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="border p-2 rounded"
        />

        <input
          name="gst"
          value={form.gst}
          onChange={handleChange}
          placeholder="GST Number"
          className="border p-2 rounded"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded"
        />

        <input
          name="material"
          value={form.material}
          onChange={handleChange}
          placeholder="Material Supplied"
          className="border p-2 rounded"
        />

        <input
          name="openingBalance"
          value={form.openingBalance}
          onChange={handleChange}
          type="number"
          placeholder="Opening Balance"
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-5 py-2 rounded mt-4 hover:bg-green-700"
      >
        Save Supplier
      </button>
    </div>
  );
}