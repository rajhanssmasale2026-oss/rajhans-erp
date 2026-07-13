import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

function Products() {
  const {
    products,
    addProduct,
    addStock,
    deleteProduct,
  } = useContext(ProductContext);

  const [showForm, setShowForm] =
    useState(false);

  const handleAddStock = (productName) => {
    const qty = prompt("Enter Stock Quantity");

    if (!qty) return;

    if (isNaN(qty) || Number(qty) <= 0) {
      alert("Please enter valid quantity");
      return;
    }

    addStock(productName, Number(qty));
  };

  const handleSaveProduct = (product) => {
    addProduct(product);

    setShowForm(false);

    alert("Product Added Successfully");
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          📦 Product Master
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          ➕ Add New Product
        </button>

      </div>

      {showForm && (
        <ProductForm
          onSave={handleSaveProduct}
        />
      )}

      <div className="bg-white shadow-lg rounded-lg p-6">

        <table className="w-full border border-collapse">

          <thead>

            <tr className="bg-gray-200">

              <th className="border p-3">
                Code
              </th>

              <th className="border p-3">
                Product
              </th>

              <th className="border p-3">
                Weight
              </th>

              <th className="border p-3">
                Sale Price
              </th>

              <th className="border p-3">
                Stock
              </th>

              <th className="border p-3">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {products.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="border p-5 text-center"
                >
                  No Products Found
                </td>

              </tr>

            ) : (

              products.map((item) => (

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
                    ₹ {item.salePrice}
                  </td>

                  <td className="border p-3 font-bold text-blue-600">
                    {item.stock}
                  </td>

                  <td className="border p-3">

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          handleAddStock(item.name)
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                      >
                        + Stock
                      </button>

                      <button
                        onClick={() => {

                          if (
                            window.confirm(
                              `Delete ${item.name} ?`
                            )
                          ) {
                            deleteProduct(item.code);
                          }

                        }}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Products;