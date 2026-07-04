function ProductTable({ products }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Product List</h2>

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
            <th>Pack</th>
            <th>Purchase Price</th>
            <th>Sale Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.code}>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.weight}</td>
              <td>₹ {product.purchasePrice}</td>
              <td>₹ {product.salePrice}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;