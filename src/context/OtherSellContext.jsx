import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getSell,
  addSell as addSellAPI,
  deleteSell as deleteSellAPI,
} from "../services/sellService";

export const OtherSellContext = createContext();

export function OtherSellProvider({
  children,
}) {

  const [otherSales, setOtherSales] =
    useState([]);

  useEffect(() => {

    async function loadSell() {

      try {

        const data = await getSell();

        if (Array.isArray(data)) {

          setOtherSales(data);

        }

      } catch (err) {

        console.error(err);

      }

    }

    loadSell();

  }, []);

  const addOtherSale = async (sale) => {

    try {

      const response =
        await addSellAPI(sale);

      setOtherSales((prev) => [

        response.sell,

        ...prev,

      ]);

    } catch (err) {

      console.error(err);

      alert("Sell Save Failed");

    }

  };

  const deleteOtherSale = async (id) => {

    try {

      await deleteSellAPI(id);

      setOtherSales((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );

    } catch (err) {

      console.error(err);

    }

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
        sum + Number(item.amount || 0),

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