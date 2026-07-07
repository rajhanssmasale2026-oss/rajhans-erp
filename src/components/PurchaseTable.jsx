function PurchaseTable({ purchases, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        📋 Purchase History
      </h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Date</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {purchases.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.product}</td>
              <td className="border p-2">{item.quantity} Kg</td>

              <td className="border p-2">
                <button
                  onClick={() => onDelete(index)}
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
  );
}

export default PurchaseTable;