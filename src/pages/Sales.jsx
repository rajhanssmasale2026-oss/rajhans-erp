import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { SalesContext } from "../context/SalesContext";
function Sales() {const { products, updateStock } = useContext(ProductContext);

  


  const [sale, setSale] = useState({
    customerName: "",
    mobile: "",
    product: "",
    quantity: "",
    price: "",
  });


  const [sales, setSales] = useState([]);


  const handleChange = (e) => {

    setSale({
      ...sale,
      [e.target.name]: e.target.value,
    });

  };


  const handleProduct = (e) => {

    const selected = products.find(
      (item)=> item.name === e.target.value
    );


    setSale({
      ...sale,
      product:selected.name,
      price:selected.salePrice,
    });

  };



  const addSale = () => {


    if(
      !sale.customerName ||
      !sale.product ||
      !sale.quantity
    ){
      alert("Please fill all details");
      return;
    }



    const newSale = {

      id: Date.now(),

      invoice:
      "INV-" + Date.now(),

      date:
      new Date().toLocaleDateString(),

      customer:
      sale.customerName,

      mobile:
      sale.mobile,

      product:
      sale.product,

      quantity:
      Number(sale.quantity),

      price:
      Number(sale.price),

      total:
      Number(sale.quantity) *
      Number(sale.price),

    };



    setSales([
      ...sales,
      newSale
    ]);
    updateStock(
  sale.product,
  Number(sale.quantity)
);
    const productIndex = products.findIndex(
  (item)=> item.name === sale.product
);


if(productIndex !== -1){

  products[productIndex].stock =
  products[productIndex].stock - Number(sale.quantity);

}



    setSale({

      customerName:"",
      mobile:"",
      product:"",
      quantity:"",
      price:"",

    });


  };




  return (

    <div className="p-6">


      <h1 className="text-3xl font-bold mb-6">
        Sales / विक्री
      </h1>



      <div className="bg-white shadow-lg rounded-lg p-6">


        <h2 className="text-xl font-semibold mb-4">
          Create Sale Invoice
        </h2>



        <div className="grid grid-cols-2 gap-4">


          <input
          name="customerName"
          placeholder="Customer Name / ग्राहक नाव"
          value={sale.customerName}
          onChange={handleChange}
          className="border p-3 rounded"
          />



          <input
          name="mobile"
          placeholder="Mobile Number"
          value={sale.mobile}
          onChange={handleChange}
          className="border p-3 rounded"
          />



          <select
          value={sale.product}
          onChange={handleProduct}
          className="border p-3 rounded"
          >

            <option value="">
              Select Product
            </option>


            {
              products.map((item)=>(
                <option key={item.code}>
                  {item.name}
                </option>
              ))
            }


          </select>



          <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={sale.quantity}
          onChange={handleChange}
          className="border p-3 rounded"
          />



          <input
          type="number"
          value={sale.price}
          readOnly
          placeholder="Rate"
          className="border p-3 rounded bg-gray-100"
          />



        </div>




        <button

        onClick={addSale}

        className="mt-5 bg-green-600 text-white px-6 py-3 rounded"

        >

          Add Sale

        </button>



      </div>





      {/* Sales History */}



      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">


        <h2 className="text-xl font-semibold mb-4">
          Sales History / विक्री नोंद
        </h2>



        <table className="w-full border">


          <thead>

            <tr className="bg-gray-200">

              <th className="border p-2">
                Invoice
              </th>


              <th className="border p-2">
                Date
              </th>


              <th className="border p-2">
                Customer
              </th>


              <th className="border p-2">
                Product
              </th>


              <th className="border p-2">
                Qty
              </th>


              <th className="border p-2">
                Total
              </th>


            </tr>

          </thead>



          <tbody>


          {
            sales.map((item)=>(

              <tr key={item.id}>


                <td className="border p-2">
                  {item.invoice}
                </td>


                <td className="border p-2">
                  {item.date}
                </td>


                <td className="border p-2">
                  {item.customer}
                </td>


                <td className="border p-2">
                  {item.product}
                </td>


                <td className="border p-2">
                  {item.quantity}
                </td>


                <td className="border p-2">
                  ₹ {item.total}
                </td>


              </tr>


            ))
          }



          </tbody>


        </table>


      </div>



    </div>

  );

}


export default Sales;