import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseReport() {

  const { expenses } = useContext(ExpenseContext);

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        💸 Expense Report
      </h2>

      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-3">
              Date
            </th>

            <th className="border p-3">
              Category
            </th>

            <th className="border p-3">
              Description
            </th>

            <th className="border p-3">
              Amount
            </th>

          </tr>

        </thead>

        <tbody>

          {expenses.length === 0 ? (

            <tr>

              <td
                colSpan="4"
                className="border p-5 text-center"
              >
                No Expense Found
              </td>

            </tr>

          ) : (

            expenses.map((expense) => (

              <tr key={expense.id}>

                <td className="border p-3">
                  {expense.date}
                </td>

                <td className="border p-3">
                  {expense.category}
                </td>

                <td className="border p-3">
                  {expense.description}
                </td>

                <td className="border p-3">
                  ₹ {expense.amount}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default ExpenseReport;