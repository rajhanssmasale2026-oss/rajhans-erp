import { useContext, useState } from "react";

import { PurchaseContext } from "../context/PurchaseContext";
import { RawMaterialContext } from "../context/RawMaterialContext";
import { addPurchase as addPurchaseAPI } from "../services/purchaseService";

function Purchase() {

  const { purchases, addPurchase, deletePurchase } =
    useContext(PurchaseContext);

  const { updateStock } =
    useContext(RawMaterialContext);


  const [purchase, setPurchase] = useState({
    date: "",
    billNo: "",
    supplier: "",
    material: "",
    quantity: "",
    rate: "",
    remarks: "",
  });


  const handleChange = (e) => {
    setPurchase({
      ...purchase,
      [e.target.name]: e.target.value,
    });
  };


  const total =
    Number(purchase.quantity || 0) *
    Number(purchase.rate || 0);



  const handleSave = async () => {

    if (
      !purchase.date ||
      !purchase.supplier ||
      !purchase.material ||
      !purchase.quantity ||
      !purchase.rate
    ) {
      alert("Please fill required fields");
      return;
    }


    const dbPurchase = {
  purchase_date: purchase.date,
  bill_no: purchase.billNo,
  supplier: purchase.supplier,
  material: purchase.material,
  quantity: Number(purchase.quantity),
  rate: Number(purchase.rate),
  total,
  remarks: purchase.remarks,
};

try {
  await addPurchaseAPI(dbPurchase);

  addPurchase({
    id: Date.now(),
    ...purchase,
    total,
  });

  updateStock(
    purchase.material,
    purchase.quantity
  );

  alert("Purchase Saved Successfully");

} catch (err) {
  console.error(err);
  alert("Error Saving Purchase");
}


    setPurchase({
      date: "",
      billNo: "",
      supplier: "",
      material: "",
      quantity: "",
      rate: "",
      remarks: "",
    });

  };


  return (

    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Raw Material Purchase
      </h1>


      <div className="bg-white p-6 rounded-xl shadow-lg">


        <input
          type="date"
          name="date"
          value={purchase.date}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="text"
          name="billNo"
          placeholder="Bill No"
          value={purchase.billNo}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="text"
          name="supplier"
          placeholder="Supplier Name"
          value={purchase.supplier}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="text"
          name="material"
          placeholder="Raw Material Name"
          value={purchase.material}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={purchase.quantity}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="number"
          name="rate"
          placeholder="Purchase Rate"
          value={purchase.rate}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <input
          type="text"
          value={total}
          readOnly
          className="border p-3 w-full mb-4 rounded bg-gray-100"
        />


        <textarea
          name="remarks"
          placeholder="Remarks"
          value={purchase.remarks}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
        />


        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Save Purchase
                </button>

      </div>


      <div className="bg-white mt-8 p-6 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold mb-4">
          Purchase History
        </h2>


        <table className="w-full border">

          <thead>

            <tr className="border">

              <th className="border p-2">
                Date
              </th>

              <th className="border p-2">
                Supplier
              </th>

              <th className="border p-2">
                Material
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

            {purchases.map((item) => (

              <tr
                key={item.id}
                className="border"
              >

                <td className="border p-2">
                  {item.date}
                </td>


                <td className="border p-2">
                  {item.supplier}
                </td>


                <td className="border p-2">
                  {item.material}
                </td>


                <td className="border p-2">
                  {item.quantity}
                </td>


                <td className="border p-2">
                  ₹{item.rate}
                </td>


                <td className="border p-2">
                  ₹{item.total}
                </td>


                <td className="border p-2">

                  <button
                    onClick={() =>
                      deletePurchase(item.id)
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
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


export default Purchase;
        