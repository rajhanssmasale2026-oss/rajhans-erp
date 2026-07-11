import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseTable() {

  const {
    expenses,
    deleteExpense,
  } = useContext(ExpenseContext);


  return (

    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        Expense History / खर्च इतिहास
      </h2>


      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead>

            <tr className="bg-gray-100">

              <th className="border p-2">
                Date
              </th>

              <th className="border p-2">
                Category
              </th>

              <th className="border p-2">
                Description
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

            {
              expenses.map((item) => (

                <tr key={item.id}>

                  <td className="border p-2">
                    {item.date}
                  </td>


                  <td className="border p-2">
                    {item.category}
                  </td>


                  <td className="border p-2">
                    {item.description}
                  </td>


                  <td className="border p-2">
                    ₹ {item.amount}
                  </td>


                  <td className="border p-2">

                    <button

                      onClick={() =>
                        deleteExpense(item.id)
                      }

                      className="bg-red-500 text-white px-3 py-1 rounded"

                    >
                      Delete
                    </button>

                  </td>


                </tr>

              ))
            }


            {
              expenses.length === 0 && (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center p-4"
                  >

                    No Expenses Found

                  </td>

                </tr>

              )
            }


          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ExpenseTable;