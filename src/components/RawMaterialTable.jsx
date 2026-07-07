export default function RawMaterialTable({ materials }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-5">
      <h2 className="text-xl font-bold mb-4">
        Raw Material Stock
      </h2>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">Code</th>
            <th className="p-2">Material</th>
            <th className="p-2">Unit</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Purchase Price</th>
          </tr>
        </thead>

        <tbody>
          {materials.map((item) => (
            <tr key={item.id} className="border-t text-center">
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{item.stock}</td>
              <td>₹ {item.purchasePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}