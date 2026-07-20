import React, { useContext } from "react";
import { OtherSellContext } from "../context/OtherSellContext";

function OtherSellTable() {

  const {
    otherSales,
    deleteOtherSale,
  } = useContext(OtherSellContext);

  return (

    <div className="bg-white shadow rounded-lg p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Other Sell History
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead>

            <tr className="bg-green-600 text-white">

              <th className="border p-2">
                Date
              </th>

              <th className="border p-2">
                Item
              </th>

              <th className="border p-2">
                Amount
              </th>

              <th className="border p-2">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {otherSales.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  className="text-center p-4"
                >

                  No Record Found

                </td>

              </tr>

            ) : (

              otherSales.map((item) => (

                <tr key={item.id}>

                  <td className="border p-2">
                    {item.sell_date}
                  </td>

                  <td className="border p-2">
                    {item.item_name}
                  </td>

                  <td className="border p-2">
                    ₹ {item.amount}
                  </td>

                  <td className="border p-2">

                    <button
                      onClick={() =>
                        deleteOtherSale(item.id)
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

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

export default OtherSellTable;