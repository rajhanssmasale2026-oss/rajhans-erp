import { createContext, useEffect, useState } from "react";
import productsData from "../data/products";
import { getProducts } from "../services/productService";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);

  // Load Products from Backend
  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();

        if (data && data.length > 0) {

          const formattedProducts = data.map((item) => ({
            code: item.code,
            name: item.name,
            weight: item.weight,
            salePrice: Number(item.sale_price),
            stock: Number(item.stock),
            effectiveFrom: item.effectiveFrom,
            priceHistory: item.priceHistory || [],
          }));

          setProducts(formattedProducts);

        } else {

          setProducts(productsData);

        }

      } catch (error) {

        console.error(
          "Backend Product Load Error",
          error
        );

        // Backend बंद असेल तर जुना data वापरेल
        const savedProducts =
          localStorage.getItem("products");

        setProducts(
          savedProducts
            ? JSON.parse(savedProducts)
            : productsData
        );

      }

    }

    loadProducts();

  }, []);


  // LocalStorage Backup
  useEffect(() => {

    if (products.length > 0) {

      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );

    }

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
      prev.filter(
        (item) => item.code !== code
      )
    );

  };


  // Update Sale Price
  const updateSalePrice = (
    code,
    salePrice,
    effectiveFrom
  ) => {

    setProducts((prev) =>

      prev.map((item) => {

        if (item.code !== code)
          return item;


        const history =
          item.priceHistory || [];


        return {

          ...item,

          salePrice: Number(salePrice),

          effectiveFrom,

          priceHistory: [

            ...history,

            {
              salePrice:
                Number(salePrice),

              effectiveFrom,

              changedAt:
                new Date()
                .toLocaleString(),
            },

          ],

        };

      })

    );

  };


  // Stock Minus (Sales)
  const updateStock = (
    productName,
    qty
  ) => {

    setProducts((prev) =>

      prev.map((item) =>

        item.name === productName

        ? {

          ...item,

          stock:
          Number(item.stock)
          -
          Number(qty),

        }

        : item

      )

    );

  };


  // Stock Plus (Purchase)
  const addStock = (
    productName,
    qty
  ) => {

    setProducts((prev) =>

      prev.map((item) =>

        item.name === productName

        ? {

          ...item,

          stock:
          Number(item.stock)
          +
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