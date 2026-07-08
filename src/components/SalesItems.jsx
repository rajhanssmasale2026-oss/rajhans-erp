function SalesItems({
  items,
  products,
  handleItemChange,
  addRow,
}) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 mb-3 flex-wrap"
        >
          <select
            name="product"
            value={item.product}
            onChange={(e) =>
              handleItemChange(index, e)
            }
            className="border p-2 flex-1 rounded"
          >
            <option value="">
              Select Product
            </option>

            {products.map((product) => (
              <option
                key={product.code}
                value={product.name}
              >
                {product.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Qty"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, e)
            }
            className="border p-2 w-24 rounded"
          />

          <input
            type="number"
            name="rate"
            placeholder="Rate"
            value={item.rate}
            onChange={(e) =>
              handleItemChange(index, e)
            }
            className="border p-2 w-28 rounded"
          />

          <input
            readOnly
            value={item.total}
            className="border p-2 w-32 bg-gray-100 rounded"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add Product
      </button>
    </>
  );
}

export default SalesItems;