import React, { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";

function CustomerTable({ search }) {
  const { customers, deleteCustomer } =
    useContext(CustomerContext);

  const filteredCustomers = customers.filter((customer) =>
    customer.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        Customer List
      </h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Code</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Purchase</th>
            <th className="border p-2">Received</th>
            <th className="border p-2">Balance</th>
            <th className="border p-2">Since</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                className="border p-4 text-center"
              >
                No Customers Found
              </td>
            </tr>
          ) : (
            filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="border p-2">
                  {customer.code}
                </td>

                <td className="border p-2">
                  {customer.name}
                </td>

                <td className="border p-2">
                  {customer.address}
                </td>

                <td className="border p-2">
                  {customer.mobile}
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

                <td className="border p-2 text-center">
                  <button
                    onClick={() =>
                      deleteCustomer(customer.id)
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
  );
}

export default CustomerTable;