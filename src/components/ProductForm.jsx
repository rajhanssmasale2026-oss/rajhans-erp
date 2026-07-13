import { useState } from "react";

function ProductForm({ onSave }) {
  const today = new Date().toISOString().split("T")[0];

  const [product, setProduct] = useState({
    name: "",
    weight: "200gm",
    salePrice: "",
    effectiveFrom: today,
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (product.name.trim() === "") {
      alert("Please enter Product Name");
      return;
    }

    if (product.salePrice === "") {
      alert("Please enter Sale Price");
      return;
    }

    onSave(product);

    setProduct({
      name: "",
      weight: "200gm",
      salePrice: "",
      effectiveFrom: today,
      stock: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-5">
        ➕ Add New Product
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border rounded-lg p-3"
        />

        <select
          name="weight"
          value={product.weight}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="200gm">200gm</option>
          <option value="500gm">500gm</option>
        </select>

        <input
          type="number"
          name="salePrice"
          value={product.salePrice}
          onChange={handleChange}
          placeholder="Sale Price"
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          name="effectiveFrom"
          value={product.effectiveFrom}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Opening Stock"
          className="border rounded-lg p-3"
        />

      </div>

      <button
        onClick={handleSave}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Product
      </button>

    </div>
  );
}

export default ProductForm;