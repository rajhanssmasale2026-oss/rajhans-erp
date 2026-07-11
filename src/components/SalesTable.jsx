import React, { useContext } from "react";
import { SalesContext } from "../context/SalesContext";
import { generateInvoicePDF } from "../utils/generateInvoicePDF";

function SalesTable() {

  const { sales } =
    useContext(SalesContext);


  return (

    <div className="bg-white shadow-lg rounded-lg p-6">

      <h2 className="text-xl font-semibold mb-4">
        Sales History / विक्री नोंद
      </h2>


      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-2">
              Invoice
            </th>

            <th className="border p-2">
              Date
            </th>

            <th className="border p-2">
              Customer
            </th>

            <th className="border p-2">
              Mobile
            </th>

            <th className="border p-2">
              Total
            </th>

            <th className="border p-2">
              PDF
            </th>

          </tr>

        </thead>


        <tbody>

          {sales.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="border p-4 text-center"
              >
                No Sales Found
              </td>

            </tr>

          ) : (

            sales.map((item)=>(

              <tr key={item.id}>

                <td className="border p-2">
                  {item.invoice}
                </td>


                <td className="border p-2">
                  {item.date}
                </td>


                <td className="border p-2">
                  {item.customer}
                </td>


                <td className="border p-2">
                  {item.mobile}
                </td>


                <td className="border p-2 text-right">
                  ₹ {item.totalAmount}
                </td>


                <td className="border p-2 text-center">

                  <button

                    onClick={() =>
                      generateInvoicePDF(item)
                    }

                    className="bg-blue-600 text-white px-3 py-1 rounded"

                  >
                    Download PDF
                  </button>

                </td>


              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}


export default SalesTable;