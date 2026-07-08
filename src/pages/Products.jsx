import React from "react";
import products from "../data/products";

function Products() {

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Product Master / उत्पादन यादी
      </h1>


      <div className="bg-white shadow-lg rounded-lg p-6">


        <table className="w-full border">


          <thead>

            <tr className="bg-gray-200">

              <th className="border p-3">
                Code
              </th>


              <th className="border p-3">
                Product
              </th>


              <th className="border p-3">
                Weight
              </th>


              <th className="border p-3">
                Purchase
              </th>


              <th className="border p-3">
                Sale
              </th>


              <th className="border p-3">
                Stock
              </th>


            </tr>

          </thead>



          <tbody>


          {
            products.map((item)=>(

              <tr key={item.code}>


                <td className="border p-3">
                  {item.code}
                </td>


                <td className="border p-3">
                  {item.name}
                </td>


                <td className="border p-3">
                  {item.weight}
                </td>


                <td className="border p-3">
                  ₹ {item.purchasePrice}
                </td>


                <td className="border p-3">
                  ₹ {item.salePrice}
                </td>


                <td className="border p-3 font-bold">
                  {item.stock}
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


export default Products;