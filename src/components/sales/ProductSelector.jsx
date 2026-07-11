import React from "react";

function ProductSelector({
  sale,
  products,
  handleChange,
  handleProduct,
  handleAddItem,
}) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-5">

      <select
        value={sale.product}
        onChange={handleProduct}
        className="border rounded p-3"
      >
        <option value="">
          Select Product
        </option>

        {products.map((item) => (
          <option
            key={item.code}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={sale.quantity}
        onChange={handleChange}
        className="border rounded p-3"
      />

      <input
        type="number"
        name="price"
        placeholder="Sale Price"
        value={sale.price}
        onChange={handleChange}
        className="border rounded p-3"
      />

      <button
        onClick={handleAddItem}
        className="bg-blue-600 text-white rounded p-3"
      >
        + Add Item
      </button>

    </div>
  );
}

export default ProductSelector;