import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Products() {
  const { products, addProduct, deleteProduct } = useContext(ProductContext);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        📦 Product Master
      </h1>

      <ProductForm onSave={addProduct} />

      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <input
          type="text"
          placeholder="🔍 Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-3 w-full mb-4"
        />

        <ProductTable
          products={filteredProducts}
          onDelete={deleteProduct}
        />
      </div>
    </div>
  );
}

export default Products;