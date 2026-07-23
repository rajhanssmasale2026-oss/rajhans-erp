function ProductTable({
  products,
  onDelete,
  onAddStock,
  onEditPrice,
}) {
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

            <th>Sale Price</th>

            <th>Effective From</th>

            <th>Stock</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.code}>

              <td>{product.code}</td>

              <td>{product.name}</td>

              <td>{product.weight}</td>

              <td>₹ {product.salePrice}</td>

              <td>
                {product.effectiveFrom || "-"}
              </td>

              <td>{product.stock}</td>

              <td>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >

                  <button
                    onClick={() =>
                      onAddStock(product.name)
                    }
                    style={{
                      background: "#16a34a",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    + Stock
                  </button>

                  <button
                    onClick={() =>
                      onEditPrice(product)
                    }
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️ Edit Price
                  </button>

                  <button
                    onClick={() =>
  onDelete(product.id)
}
                    style={{
                      background: "#dc2626",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;