import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { PurchaseContext } from "../context/PurchaseContext";

function Purchase() {
  const { products } = useContext(ProductContext);
  const { addPurchase } = useContext(PurchaseContext);

  const [purchase, setPurchase] = useState({
    product: "",
    quantity: "",
    rate: "",
  });

  const handleChange = (e) => {
    setPurchase({
      ...purchase,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!purchase.product || !purchase.quantity || !purchase.rate) {
      alert("Please fill all fields");
      return;
    }

    addPurchase({
      ...purchase,
      date: new Date().toLocaleDateString(),
    });

    alert("Purchase Saved Successfully");

    setPurchase({
      product: "",
      quantity: "",
      rate: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">
        🛒 Raw Material Purchase
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">

        <select
          name="product"
          value={purchase.product}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full mb-4"
        >
          <option value="">Select Product</option>

          {products.map((product) => (
            <option key={product.code} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity (Kg)"
          value={purchase.quantity}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full mb-4"
        />

        <input
          type="number"
          name="rate"
          placeholder="Purchase Rate"
          value={purchase.rate}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          💾 Save Purchase
        </button>

      </div>
    </div>
  );
}

export default Purchase;