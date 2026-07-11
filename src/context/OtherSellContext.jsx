import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const OtherSellContext = createContext();

export function OtherSellProvider({
  children,
}) {

  const [otherSales, setOtherSales] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "otherSales"
        );

      return saved
        ? JSON.parse(saved)
        : [];

    });


  useEffect(() => {

    localStorage.setItem(
      "otherSales",
      JSON.stringify(otherSales)
    );

  }, [otherSales]);


  const addOtherSale = (sale) => {

    setOtherSales((prev) => [

      ...prev,

      {
        id: Date.now(),
        ...sale,
      },

    ]);

  };


  const deleteOtherSale = (id) => {

    setOtherSales((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };


  const updateOtherSale = (
    id,
    updatedSale
  ) => {

    setOtherSales((prev) =>

      prev.map((item) =>

        item.id === id
          ? {
              ...item,
              ...updatedSale,
            }
          : item

      )

    );

  };


  const totalOtherSales =
    otherSales.reduce(

      (sum, item) =>
        sum + Number(item.total || 0),

      0

    );


  return (

    <OtherSellContext.Provider

      value={{

        otherSales,

        addOtherSale,

        deleteOtherSale,

        updateOtherSale,

        totalOtherSales,

      }}

    >

      {children}

    </OtherSellContext.Provider>

  );

}