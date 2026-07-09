import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Products() {
  const { products, addStock } = useContext(ProductContext);

  const handleAddStock = (productName) => {
    const qty = prompt("Enter Stock Quantity");

    if (!qty) return;

    if (isNaN(qty) || Number(qty) <= 0) {
      alert("Please enter valid quantity");
      return;
    }

    addStock(productName, Number(qty));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Product Master / उत्पादन यादी
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Code</th>
              <th className="border p-3">Product</th>
              <th className="border p-3">Weight</th>
              <th className="border p-3">Purchase</th>
              <th className="border p-3">Sale</th>
              <th className="border p-3">Stock</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.code}>
                <td className="border p-3">
                  {item.code}
                </td>

                <td className="border p-3">
                  {item.name}
                </td>

                <td className="border p-3">
                  {item.weight}
                </td>

                <td className="border p-3">
                  ₹ {item.purchasePrice}
                </td>

                <td className="border p-3">
                  ₹ {item.salePrice}
                </td>

                <td className="border p-3 font-bold text-blue-600">
                  {item.stock}
                </td>

                <td className="border p-3">
                  <button
                    onClick={() =>
                      handleAddStock(item.name)
                    }
                    className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                  >
                    + Add Stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;