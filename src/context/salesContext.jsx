import { createContext, useEffect, useState } from "react";

export const SalesContext = createContext();

export function SalesProvider({ children }) {

  const [sales, setSales] = useState(() => {

    const saved = localStorage.getItem("sales");

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



  const addSale = (bill) => {

    const total = Number(
      bill.totalAmount || 0
    );

    setSales((prev) => [

      ...prev,

      {

        id: Date.now(),

        ...bill,

        paidAmount: 0,

        balanceAmount: total,

        paymentStatus: "Pending",

      },

    ]);

  };



  const receivePayment = (
    id,
    paymentAmount
  ) => {

    setSales((prev) =>

      prev.map((sale) => {

        if (sale.id !== id)
          return sale;

        const paid =
          Number(sale.paidAmount) +
          Number(paymentAmount);

        const total =
          Number(sale.totalAmount);

        const balance =
          total - paid;

        return {

          ...sale,

          paidAmount: paid,

          balanceAmount:
            balance < 0
              ? 0
              : balance,

          paymentStatus:
            balance <= 0
              ? "Paid"
              : "Pending",

        };

      })

    );

  };



  const deleteSale = (id) => {

    setSales((prev) =>

      prev.filter(
        (item) => item.id !== id
      )

    );

  };



  const totalSales =
    sales.reduce(

      (sum, sale) =>

        sum +
        Number(
          sale.totalAmount || 0
        ),

      0

    );



  const totalOutstanding =
    sales.reduce(

      (sum, sale) =>

        sum +
        Number(
          sale.balanceAmount || 0
        ),

      0

    );



  return (

    <SalesContext.Provider

      value={{

        sales,

        addSale,

        receivePayment,

        deleteSale,

        totalSales,

        totalOutstanding,

      }}

    >

      {children}

    </SalesContext.Provider>

  );

}