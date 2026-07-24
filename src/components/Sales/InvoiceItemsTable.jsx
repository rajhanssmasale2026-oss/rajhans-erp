import React from "react";

function InvoiceItemsTable({
  items,
  setItems,
}) {
  if (items.length === 0) return null;

  const removeItem = (index) => {
    setItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="mt-6">

      <h3 className="text-lg font-bold mb-3">
        Invoice Items
      </h3>

      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-2">
              Product
            </th>

            <th className="border p-2">
              Qty
            </th>

            <th className="border p-2">
              Rate
            </th>

            <th className="border p-2">
              Total
            </th>

            <th className="border p-2">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {items.map((item, index) => (

            <tr key={index}>

              <td className="border p-2">
                {item.product}
              </td>

              <td className="border p-2 text-center">
                {item.quantity}
              </td>

              <td className="border p-2 text-right">
                ₹ {item.price}
              </td>

              <td className="border p-2 text-right">
                ₹ {item.total}
              </td>

              <td className="border p-2 text-center">

                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default InvoiceItemsTable;