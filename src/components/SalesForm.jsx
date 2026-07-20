import React, { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";
import { SalesContext } from "../context/SalesContext";


import CustomerDetails from "./Sales/CustomerDetails";
import ProductSelector from "./Sales/ProductSelector";
import InvoiceItemsTable from "./Sales/InvoiceItemsTable";
import InvoiceSummary from "./Sales/InvoiceSummary";
import AddSaleButton from "./Sales/AddSaleButton";

function SalesForm() {

  const { products, updateStock } =
    useContext(ProductContext);

  const { addSale } =
    useContext(SalesContext);

  


  const [sale, setSale] = useState({
    customerName: "",
    mobile: "",
    product: "",
    quantity: "",
    price: "",
    paidAmount: "",
  });


  const [items, setItems] = useState([]);
  const [paidAmount, setPaidAmount] = useState(0);


  const handleChange = (e) => {

    setSale({
      ...sale,
      [e.target.name]: e.target.value,
    });

  };


  const handleProduct = (e) => {

    setSale({
      ...sale,
      product: e.target.value,
    });

  };


  const handleAddItem = () => {

    if (
      !sale.product ||
      !sale.quantity ||
      !sale.price
    ) {
      alert("Fill Product Quantity Price");
      return;
    }


    const newItem = {

      product: sale.product,

      quantity:
        Number(sale.quantity),

      price:
        Number(sale.price),

      total:
        Number(sale.quantity) *
        Number(sale.price),

    };


    setItems([
      ...items,
      newItem,
    ]);


    setSale({
      ...sale,
      product: "",
      quantity: "",
      price: "",
    });

  };



  const handleAddSale = () => {
    console.log("HANDLE ADD SALE CLICKED");


    if (!sale.customerName) {

      alert("Enter Customer Name");
      return;

    }


    if (items.length === 0) {

      alert("Add Product");
      return;

    }



    const grandTotal =
      items.reduce(
        (sum,item)=>
          sum + item.total,
        0
      );



    console.log("STATE =", paidAmount);
    addSale({

  invoice:
    "INV-" + Date.now(),

  date:
    new Date().toLocaleDateString(),

  customer:
    sale.customerName,

  mobile:
    sale.mobile,

  products:
    items,

  totalAmount:
    grandTotal,

  paidAmount:
    Number(paidAmount),

});



   



    items.forEach((item)=>{

      updateStock(
        item.product,
        item.quantity
      );

    });



    setItems([]);
    setPaidAmount(0);


    setSale({

      customerName:"",
      mobile:"",
      product:"",
      quantity:"",
      price:"",

    });


  };



  return (

    <div className="bg-white shadow-lg rounded-lg p-6">


      <h2 className="text-2xl font-bold mb-5">
        Create Sale Invoice
      </h2>


      <CustomerDetails

        sale={sale}

        handleChange={handleChange}

      />



      <ProductSelector

        sale={sale}

        products={products}

        handleChange={handleChange}

        handleProduct={handleProduct}

        handleAddItem={handleAddItem}

      />



      <InvoiceItemsTable

        items={items}

        setItems={setItems}

      />



      <InvoiceSummary
  items={items}
  paidAmount={paidAmount}
  setPaidAmount={setPaidAmount}
/>



      <AddSaleButton

        handleAddSale={handleAddSale}

      />


    </div>

  );

}


export default SalesForm;