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

  const updateStock = (productName, qty) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.name === productName
          ? {
              ...item,
              stock: Number(item.stock) - Number(qty),
            }
          : item
      )
    );
  };

  const addStock = (productName, qty) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.name === productName
          ? {
              ...item,
              stock: Number(item.stock) + Number(qty),
            }
          : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        updateStock,
        addStock,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}