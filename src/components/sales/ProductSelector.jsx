import React from "react";

function ProductSelector({
  sale,
  products,
  handleChange,
  handleProduct,
  handleAddItem,
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">

        <select
          value={sale.product}
          onChange={handleProduct}
          className="border p-3 rounded"
        >
          <option value="">Select Product</option>

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
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Sale Price"
          value={sale.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />

      </div>

      <button
        onClick={handleAddItem}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded"
      >
        + Add Item
      </button>
    </>
  );
}

export default ProductSelector;