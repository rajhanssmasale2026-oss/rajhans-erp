import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { SalesContext } from "../context/SalesContext";

function SalesForm() {
  const { products, updateStock } = useContext(ProductContext);
  const { addSale } = useContext(SalesContext);

  const [sale, setSale] = useState({
    customerName: "",
    mobile: "",
    product: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setSale({
      ...sale,
      [e.target.name]: e.target.value,
    });
  };

  const handleProduct = (e) => {
    setSale({
      ...sale,
      product: e.target.value,
    });
  };

  const handleAddSale = () => {
    if (
      !sale.customerName ||
      !sale.product ||
      !sale.quantity ||
      !sale.price
    ) {
      alert("Please fill all details");
      return;
    }

    const newSale = {
      id: Date.now(),
      invoice: "INV-" + Date.now(),
      date: new Date().toLocaleDateString(),
      customer: sale.customerName,
      mobile: sale.mobile,
      product: sale.product,
      quantity: Number(sale.quantity),
      price: Number(sale.price),
      total:
        Number(sale.quantity) *
        Number(sale.price),
    };

    addSale(newSale);

    updateStock(
      sale.product,
      Number(sale.quantity)
    );

    setSale({
      customerName: "",
      mobile: "",
      product: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Create Sale Invoice
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="customerName"
          placeholder="Customer Name"
          value={sale.customerName}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={sale.mobile}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <select
          value={sale.product}
          onChange={handleProduct}
          className="border p-3 rounded"
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
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Enter Sale Price"
          value={sale.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />
      </div>

      <button
        onClick={handleAddSale}
        className="mt-5 bg-green-600 text-white px-6 py-3 rounded"
      >
        Add Sale
      </button>
    </div>
  );
}

export default SalesForm;