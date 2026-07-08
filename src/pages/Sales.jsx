import { useContext, useState } from "react";

import { SalesContext } from "../context/SalesContext";


function Sales() {


  const { sales, addSale, deleteSale } =
    useContext(SalesContext);



  const [sale, setSale] = useState({

    date: "",

    customer: "",

    product: "",

    quantity: "",

    rate: "",

    payment: "",

    remark: "",

  });



  const handleChange = (e) => {

    setSale({

      ...sale,

      [e.target.name]: e.target.value,

    });

  };



  const total =
    Number(sale.quantity || 0) *
    Number(sale.rate || 0);




  const handleSave = () => {


    if (

      !sale.date ||

      !sale.customer ||

      !sale.product ||

      !sale.quantity ||

      !sale.rate

    ) {

      alert("Please fill required fields");

      return;

    }



    addSale({

      ...sale,

      total,

    });



    alert("Sale Saved Successfully");



    setSale({

      date: "",

      customer: "",

      product: "",

      quantity: "",

      rate: "",

      payment: "",

      remark: "",

    });


  };



  return (

    <div className="p-6 bg-gray-100 min-h-screen">


      <h1 className="text-3xl font-bold mb-6">

        🧾 Sales Management

      </h1>



      <div className="bg-white p-6 rounded-xl shadow-lg">



        <input

          type="date"

          name="date"

          value={sale.date}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />



        <input

          type="text"

          name="customer"

          placeholder="Customer Name"

          value={sale.customer}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />



        <input

          type="text"

          name="product"

          placeholder="Product Name"

          value={sale.product}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />


        <input

          type="number"

          name="quantity"

          placeholder="Quantity"

          value={sale.quantity}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />


        <input

          type="number"

          name="rate"

          placeholder="Sale Rate"

          value={sale.rate}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />



        <input

          value={total}

          readOnly

          className="border p-3 w-full mb-4 rounded bg-gray-100"

        />



        <select

          name="payment"

          value={sale.payment}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        >

          <option value="">

            Payment Type

          </option>

          <option value="Cash">

            Cash

          </option>

          <option value="Credit">

            Credit

          </option>

        </select>



        <textarea

          name="remark"

          placeholder="Remark"

          value={sale.remark}

          onChange={handleChange}

          className="border p-3 w-full mb-4 rounded"

        />



        <button

          onClick={handleSave}

          className="bg-green-600 text-white px-6 py-3 rounded"

        >

          Save Sale

        </button>