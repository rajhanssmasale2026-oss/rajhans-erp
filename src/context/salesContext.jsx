import { createContext, useEffect, useState } from "react";

export const SalesContext = createContext();


export function SalesProvider({ children }) {


  const [sales, setSales] = useState(() => {

    const saved =
      localStorage.getItem("sales");

    return saved
      ? JSON.parse(saved)
      : [];

  });



  useEffect(() => {

    localStorage.setItem(
      "sales",
      JSON.stringify(sales)
    );

  }, [sales]);




  const addSale = (sale) => {

    setSales((prev) => [

      ...prev,

      {
        id: Date.now(),
        ...sale,
      }

    ]);

  };




  const deleteSale = (id) => {

    setSales((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };




  return (

    <SalesContext.Provider

      value={{

        sales,

        addSale,

        deleteSale,

      }}

    >

      {children}

    </SalesContext.Provider>

  );

}