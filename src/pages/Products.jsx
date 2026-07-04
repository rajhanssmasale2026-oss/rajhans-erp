import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import productsData from "../data/products";

function Products() {
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (newProduct) => {
    const product = {
      ...newProduct,
      code: "RJM" + String(products.length + 1).padStart(3, "0"),
    };

    setProducts([...products, product]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        📦 Product Master
      </h1>

      <ProductForm onSave={handleAddProduct} />

      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default Products;