import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";

function PurchaseReport() {

  const { purchases } = useContext(PurchaseContext);

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        🛒 Purchase Report
      </h2>

      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-3">
              Date
            </th>

            <th className="border p-3">
              Supplier
            </th>

            <th className="border p-3">
              Material
            </th>

            <th className="border p-3">
              Qty
            </th>

            <th className="border p-3">
              Rate
            </th>

            <th className="border p-3">
              Total
            </th>

          </tr>

        </thead>

        <tbody>

          {purchases.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="border p-5 text-center"
              >
                No Purchase Found
              </td>

            </tr>

          ) : (

            purchases.map((purchase) => (

              <tr key={purchase.id}>

                <td className="border p-3">
                  {purchase.date}
                </td>

                <td className="border p-3">
                  {purchase.supplier}
                </td>

                <td className="border p-3">
                  {purchase.material}
                </td>

                <td className="border p-3">
                  {purchase.quantity}
                </td>

                <td className="border p-3">
                  ₹ {purchase.rate}
                </td>

                <td className="border p-3">
                  ₹ {purchase.total}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default PurchaseReport;