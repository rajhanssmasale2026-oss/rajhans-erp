import products from "../data/products";

function ProductTable() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Product Master</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th>Code</th>
            <th>Product</th>
            <th>Weight</th>
            <th>Purchase</th>
            <th>Sale</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.code}>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.weight}</td>
              <td>{product.purchasePrice || "Pending"}</td>
              <td>{product.salePrice || "Pending"}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;