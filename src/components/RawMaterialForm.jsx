import { useState } from "react";

export default function RawMaterialForm({ addMaterial }) {
  const [form, setForm] = useState({
    name: "",
    unit: "Kg",
    stock: "",
    purchasePrice: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name) {
      alert("Material Name भरा");
      return;
    }

    addMaterial({
      name: form.name,
      unit: form.unit,
      stock: Number(form.stock),
      purchasePrice: Number(form.purchasePrice),
    });

    setForm({
      name: "",
      unit: "Kg",
      stock: "",
      purchasePrice: "",
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Add Raw Material</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Material Name"
          className="border p-2 rounded"
        />

        <input
          name="unit"
          value={form.unit}
          onChange={handleChange}
          type="text"
          className="border p-2 rounded"
        />

        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          type="number"
          placeholder="Stock"
          className="border p-2 rounded"
        />

        <input
          name="purchasePrice"
          value={form.purchasePrice}
          onChange={handleChange}
          type="number"
          placeholder="Purchase Price"
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-5 py-2 rounded mt-4 hover:bg-green-700"
      >
        Save Material
      </button>
    </div>
  );
}