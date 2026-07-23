import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import PriceEditModal from "../components/PriceEditModal";
import PriceHistory from "../components/PriceHistory";
import { addProduct as addProductAPI } from "../services/productService";

function Products() {
  const {
  products,
  addProduct,
  addStock,
  deleteProduct,
  updateSalePrice,
} = useContext(ProductContext);

  const [showForm, setShowForm] =
    useState(false);
    const [selectedProduct, setSelectedProduct] =
  useState(null);
  const [historyProduct, setHistoryProduct] =
  useState(null);

  const handleAddStock = (productName) => {
    const qty = prompt("Enter Stock Quantity");

    if (!qty) return;

    if (isNaN(qty) || Number(qty) <= 0) {
      alert("Please enter valid quantity");
      return;
    }

    addStock(productName, Number(qty));
  };

  const handleSaveProduct = async (product) => {

  try {

    const maxCode = products.reduce((max, item) => {
  const num = parseInt(item.code.replace("RJM", ""), 10);
  return num > max ? num : max;
}, 0);

const newProduct = {
  code: `RJM${String(maxCode + 1).padStart(3, "0")}`,
  name: product.name,
  weight: product.weight,
  purchase_price: 0,
  sale_price: Number(product.salePrice),
  stock: Number(product.stock),
};

    const result = await addProductAPI(newProduct);

console.log(result);

if (result.error) {

  alert(result.error);
  return;

}

alert("Product Saved Successfully");

window.location.reload();

  } catch (err) {

    console.error(err);

    alert("Error Saving Product");

  }

};
const handlePriceSave = (
  code,
  newPrice,
  effectiveFrom
) => {

  updateSalePrice(
    code,
    newPrice,
    effectiveFrom
  );

  setSelectedProduct(null);

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
  onClick={() => setSelectedProduct(item)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
>
  ✏️ Edit Price
</button>

<button
  onClick={() => setHistoryProduct(item)}
  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded"
>
  📜 History
</button>

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
                            deleteProduct(item.id);
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

    {selectedProduct && (

  <PriceEditModal

    product={selectedProduct}

    onSave={handlePriceSave}

    onClose={() =>
      setSelectedProduct(null)
    }

  />

)}
{historyProduct && (
  <PriceHistory
    product={historyProduct}
    onClose={() =>
      setHistoryProduct(null)
    }
  />
)}
</div>
  );
}

export default Products;