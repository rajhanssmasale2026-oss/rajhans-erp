import React, { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";

function CustomerLedger() {
  const { customers } = useContext(CustomerContext);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Customer Ledger
      </h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Code</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Purchase</th>
            <th className="border p-2">Received</th>
            <th className="border p-2">Balance</th>
            <th className="border p-2">Credit Since</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="border p-4 text-center"
              >
                No Customer Found
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td className="border p-2">
                  {customer.code}
                </td>

                <td className="border p-2">
                  {customer.name}
                </td>

                <td className="border p-2 text-right">
                  ₹ {customer.totalPurchase}
                </td>

                <td className="border p-2 text-right">
                  ₹ {customer.totalReceived}
                </td>

                <td className="border p-2 text-right font-bold">
                  ₹ {customer.balance}
                </td>

                <td className="border p-2 text-center">
                  {customer.creditSince || "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerLedger;