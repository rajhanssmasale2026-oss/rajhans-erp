import { createContext, useEffect, useState } from "react";
import {
  getSales,
  addSale as addSaleAPI,
  updatePayment,
} from "../services/salesService";

export const SalesContext = createContext();

export function SalesProvider({ children }) {

  const [sales, setSales] = useState([]);


  const loadSales = async () => {
  try {
    const data = await getSales();

    setSales(
      data.map((item) => ({
        id: item.id,
        invoice: item.invoice_no,
        invoiceNo: item.invoice_no,
        date: item.sale_date,
        customer: item.customer,
        mobile: item.mobile,

        products: (item.items || []).map((p) => ({
          product: p.name,
          quantity: Number(p.quantity),
          price: Number(p.rate),
          total: Number(p.amount),
        })),

        totalAmount: Number(item.total || 0),
        paymentMode: item.payment_mode || "",
        remarks: item.remarks || "",
        paidAmount: Number(item.paid_amount || 0),
        balanceAmount: Number(item.remaining_amount || 0),

        paymentStatus:
          Number(item.remaining_amount || 0) === 0
            ? "Paid"
            : "Pending",

        paymentDate: "",
      }))
    );

  } catch (err) {
    console.error("Error loading sales:", err);
  }
};
useEffect(() => {
  loadSales();
}, []);




  const addSale = async (bill) => {
    console.log("BILL DATA =", bill);
    

  try {

    const response = await addSaleAPI({

  invoice_no: bill.invoice,

  sale_date: bill.date,

  customer: bill.customer,

  mobile: bill.mobile,

  total: bill.totalAmount,

  payment_mode: bill.paymentMode || "",

  remarks: "",

  paid_amount: Number(bill.paidAmount || 0),

  remaining_amount:
    Number(bill.totalAmount) - Number(bill.paidAmount || 0),

  items: bill.products,

});
console.log("SALE API RESPONSE =", response);


    


await loadSales();


  } catch (err) {

    console.error(
      "Sale Save Error:",
      err
    );

    alert("Sale Save Failed");

  }

};



  const receivePayment = async (
  id,
  paymentAmount,
  paymentMode,
  paymentDate
) => {
  try {
    // Backend मध्ये payment save कर
    await updatePayment(
      id,
      paymentAmount,
      paymentMode,
      paymentDate
    );

    // UI update
    setSales((prev) =>
      prev.map((sale) => {
        if (sale.id !== id) {
          return sale;
        }

        const totalPaid =
          Number(sale.paidAmount || 0) +
          Number(paymentAmount);

        const balance =
          Number(sale.totalAmount) - totalPaid;

        return {
          ...sale,
          paidAmount: totalPaid,
          balanceAmount: balance > 0 ? balance : 0,
          paymentStatus:
            balance <= 0 ? "Paid" : "Pending",
          paymentMode,
          paymentDate,
        };
      })
    );

  } catch (err) {
    console.error("Payment Update Error:", err);
    alert("Payment update failed");
  }
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