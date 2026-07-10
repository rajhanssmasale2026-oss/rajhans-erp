import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function InvoiceForm() {
  const { products } = useContext(ProductContext);

  const [invoice, setInvoice] = useState({
    customerName: "",
    mobile: "",
    invoiceDate: "",
    gst: "0",
  });

  const [currentItem, setCurrentItem] = useState({
    product: "",
    quantity: "",
    rate: "",
  });

  const [items, setItems] = useState([]);

  const handleInvoiceChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddItem = () => {
  if (
    !currentItem.product ||
    !currentItem.quantity ||
    !currentItem.rate
  ) {
    alert("Please fill all item details");
    return;
  }

  const existingIndex = items.findIndex(
    (item) => item.product === currentItem.product
  );

  if (existingIndex !== -1) {
    const updatedItems = [...items];

    const oldQty = Number(updatedItems[existingIndex].quantity);
    const newQty = Number(currentItem.quantity);

    updatedItems[existingIndex].quantity =
      oldQty + newQty;

    updatedItems[existingIndex].rate =
      Number(currentItem.rate);

    updatedItems[existingIndex].total =
      updatedItems[existingIndex].quantity *
      updatedItems[existingIndex].rate;

    setItems(updatedItems);
  } else {
    setItems([
      ...items,
      {
        ...currentItem,
        quantity: Number(currentItem.quantity),
        rate: Number(currentItem.rate),
        total:
          Number(currentItem.quantity) *
          Number(currentItem.rate),
      },
    ]);
  }

  setCurrentItem({
    product: "",
    quantity: "",
    rate: "",
  });
};

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Create Invoice
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={invoice.customerName}
          onChange={handleInvoiceChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={invoice.mobile}
          onChange={handleInvoiceChange}
          className="border p-3 rounded"
        />

        <input
          type="date"
          name="invoiceDate"
          value={invoice.invoiceDate}
          onChange={handleInvoiceChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="gst"
          placeholder="GST %"
          value={invoice.gst}
          onChange={handleInvoiceChange}
          className="border p-3 rounded"
        />

      </div>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">
        Add Product
      </h3>

      <div className="grid grid-cols-3 gap-4">

        <select
          name="product"
          value={currentItem.product}
          onChange={handleItemChange}
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
          value={currentItem.quantity}
          onChange={handleItemChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="rate"
          placeholder="Rate"
          value={currentItem.rate}
          onChange={handleItemChange}
          className="border p-3 rounded"
        />

      </div>

      <button
  onClick={handleAddItem}
  className="mt-5 bg-blue-600 text-white px-5 py-3 rounded"
>
  + Add Item
</button>
    </div>
  );
}

export default InvoiceForm;