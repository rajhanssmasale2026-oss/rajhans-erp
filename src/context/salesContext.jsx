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



  const addSale = (bill) => {

    const total =
      Number(bill.totalAmount || 0);


    setSales((prev) => [

      ...prev,

      {

        id: Date.now(),

        ...bill,

        paidAmount: 0,

        balanceAmount: total,

        paymentStatus: "Pending",

        paymentMode: "",

        paymentDate: "",

      },

    ]);

  };



  const receivePayment = (
    id,
    paymentAmount,
    paymentMode,
    paymentDate
  ) => {


    setSales((prev) =>

      prev.map((sale) => {


        if (sale.id !== id) {

          return sale;

        }


        const paid =
          Number(paymentAmount);


        const oldPaid =
          Number(sale.paidAmount || 0);


        const totalPaid =
          oldPaid + paid;


        const balance =
          Number(sale.totalAmount) - totalPaid;



        return {

          ...sale,

          paidAmount:
            totalPaid,


          balanceAmount:
            balance > 0
              ? balance
              : 0,


          paymentStatus:
            balance <= 0
              ? "Paid"
              : "Pending",


          paymentMode,

          paymentDate,

        };


      })

    );

  };



  const deleteSale = (id) => {

    setSales((prev) =>

      prev.filter(
        (sale) =>
          sale.id !== id
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