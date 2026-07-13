import { createContext, useEffect, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : productsData;
  });

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  // Add Product
  const addProduct = (product) => {
    const newCode = `RJM${String(
      products.length + 1
    ).padStart(3, "0")}`;

    setProducts((prev) => [
      ...prev,
      {
        code: newCode,
        name: product.name,
        weight: product.weight,
        salePrice: Number(product.salePrice),
        effectiveFrom: product.effectiveFrom,
        stock: Number(product.stock),
      },
    ]);
  };

  // Delete Product
  const deleteProduct = (code) => {
    setProducts((prev) =>
      prev.filter((item) => item.code !== code)
    );
  };

  // Update Sale Price
  const updateSalePrice = (
    code,
    salePrice,
    effectiveFrom
  ) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.code === code
          ? {
              ...item,
              salePrice: Number(salePrice),
              effectiveFrom,
            }
          : item
      )
    );
  };

  // Stock Minus (Sales)
  const updateStock = (productName, qty) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === productName
          ? {
              ...item,
              stock:
                Number(item.stock) -
                Number(qty),
            }
          : item
      )
    );
  };

  // Stock Plus
  const addStock = (productName, qty) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === productName
          ? {
              ...item,
              stock:
                Number(item.stock) +
                Number(qty),
            }
          : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateSalePrice,
        updateStock,
        addStock,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}