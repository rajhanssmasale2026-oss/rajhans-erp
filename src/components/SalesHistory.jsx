function SalesHistory({ sales, deleteSale }) {
  return (
    <div className="bg-white mt-8 p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Sales History
      </h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Products</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((bill) => (
            <tr key={bill.id}>
              <td className="border p-2">
                {bill.date}
              </td>

              <td className="border p-2">
                {bill.customer}
              </td>

              <td className="border p-2">
                {bill.items?.map((item, index) => (
                  <div key={index}>
                    {item.product} × {item.quantity}
                  </div>
                ))}
              </td>

              <td className="border p-2">
                ₹{bill.total}
              </td>

              <td className="border p-2">
                <button
                  onClick={() => deleteSale(bill.id)}
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

export default SalesHistory;