import React, { useContext, useState } from "react";
import { SalesContext } from "../context/SalesContext.jsx";

import SalesRow from "./SalesRow";
import PaymentModal from "./PaymentModal";

function SalesTable() {

  const context = useContext(SalesContext);

console.log("Sales Context:", context);

const {
  sales,
  receivePayment,
} = context;
  console.log(useContext(SalesContext));

  const [selectedSale, setSelectedSale] =
    useState(null);

  const handleSavePayment = (
  amount,
  mode,
  paymentDate
) => {

  receivePayment(
    selectedSale.id,
    amount,
    mode,
    paymentDate
  );

  alert("Payment Saved Successfully");

  setSelectedSale(null);

};

  return (

    <div className="bg-white shadow-lg rounded-lg p-6">

      <h2 className="text-xl font-semibold mb-4">
        Sales History / विक्री नोंद
      </h2>

      <div className="overflow-x-auto">

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
                Paid
              </th>

              <th className="border p-2">
                Balance
              </th>

              <th className="border p-2">
                Status
              </th>

              <th className="border p-2">
                Payment
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
                  colSpan="10"
                  className="border p-4 text-center"
                >

                  No Sales Found

                </td>

              </tr>

            ) : (

              sales.map((sale) => (

                <SalesRow
                  key={sale.id}
                  sale={sale}
                  onReceivePayment={
                    setSelectedSale
                  }
                />

              ))

            )}

          </tbody>

        </table>

      </div>

      {selectedSale && (

        <PaymentModal

          sale={selectedSale}

          onClose={() =>
            setSelectedSale(null)
          }

          onSave={handleSavePayment}

        />

      )}

    </div>

  );

}

export default SalesTable;