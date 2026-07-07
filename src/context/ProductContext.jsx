import { createContext, useEffect, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return productsData;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      code: "RJM" + String(products.length + 1).padStart(3, "0"),
    };

    setProducts([...products, product]);
  };

  const deleteProduct = (code) => {
    setProducts(products.filter((product) => product.code !== code));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}