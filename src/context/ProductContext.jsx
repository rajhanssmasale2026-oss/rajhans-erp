import { createContext, useState } from "react";
import productsData from "../data/products";


export const ProductContext = createContext();


export function ProductProvider({ children }) {


  const [products, setProducts] = useState(() => {

    const savedProducts =
      localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : productsData;

  });



  const updateStock = (productName, qty) => {


    const updatedProducts = products.map((item)=>{


      if(item.name === productName){

        return {

          ...item,

          stock:
          item.stock - qty

        };

      }


      return item;


    });



    setProducts(updatedProducts);


    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );


  };



  return (

    <ProductContext.Provider
      value={{
        products,
        updateStock
      }}
    >

      {children}

    </ProductContext.Provider>

  );


}