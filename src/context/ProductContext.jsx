import { createContext, useEffect, useState } from "react";
import productsData from "../data/products";
import {
  getProducts,
  updateProductStock,
  addProductStock,
  updateProductPrice,
  deleteProduct as deleteProductAPI,
} from "../services/productService";

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
            id: item.id,
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
const deleteProduct = async (id) => {

  try {

    await deleteProductAPI(id);

    setProducts((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

    alert("Product Deleted Successfully");

  } catch (error) {

    console.error(error);

    alert("Failed to Delete Product");

  }

};


  // Update Sale Price
  const updateSalePrice = async (
  code,
  salePrice,
  effectiveFrom
) => {

  // Backend update
  await updateProductPrice(
    code,
    salePrice
  );

  // Frontend update
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
            salePrice: Number(salePrice),
            effectiveFrom,
            changedAt:
              new Date().toLocaleString(),
          },

        ],

      };

    })

  );

};


  // Stock Minus (Sales)
 const updateStock = async (
  productName,
  qty
) => {

  const product = products.find(
    (item) =>
      item.name === productName
  );


  if (!product) {
    console.log("Product not found");
    return;
  }


  
  // Backend stock update
await updateProductStock(
  product.id,
  Number(qty)
);


  // Frontend update
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
  const addStock = async (productName, qty) => {

  const product = products.find(
    (item) => item.name === productName
  );

  if (!product) {
    console.log("Product not found");
    return;
  }

  await addProductStock(
    product.id,
    Number(qty)
  );

  setProducts((prev) =>
    prev.map((item) =>
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