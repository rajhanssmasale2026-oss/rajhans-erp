import { useContext } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";

import { ProductContext } from "../context/ProductContext";
import { CustomerContext } from "../context/CustomerContext";
import { SalesContext } from "../context/SalesContext";
import { PurchaseContext } from "../context/PurchaseContext";


function Dashboard() {


  const { products } = useContext(ProductContext);
  const { customers } = useContext(CustomerContext);
  const { totalSales } = useContext(SalesContext);
  const { totalPurchase } =
  useContext(PurchaseContext);



  const totalStock = products.reduce(
    (total, item) =>
      total + Number(item.stock || 0),
    0
  );


  // Low Stock Alert (Below 10)
  const lowStockProducts = products.filter(
    (item) =>
      Number(item.stock || 0) < 10
  );



  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />


      <div className="flex">

        <Sidebar />


        <main className="flex-1 p-8">


          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

            <h1 className="text-4xl font-bold text-gray-800">
              👋 Welcome to Rajhans ERP
            </h1>

            <p className="text-gray-500 mt-2">
              Rajhans Masale Business Management System
            </p>

          </div>



          <DashboardCards />



          <div className="grid grid-cols-2 gap-6 mt-6">



            <div className="bg-white rounded-xl shadow-lg p-6">


              <h2 className="text-2xl font-bold mb-4">
                📊 Today's Summary
              </h2>



              <ul className="space-y-3">


                <li>
                  💰 Total Sales : ₹ {totalSales}
                </li>


                <li>
                  🛒 Total Purchase : ₹ {totalPurchase}
                </li>


                <li>
                  📦 Available Stock : {totalStock}
                </li>


                {/*
<li>
  👥 Customers : {customers.length}
</li>
*/}


              </ul>


            </div>




            <div className="bg-white rounded-xl shadow-lg p-6">


              <h2 className="text-2xl font-bold mb-4">
                🔔 Notifications
              </h2>



              <ul className="space-y-3">


                <li>
                  ✅ ERP Started Successfully
                </li>



                {
                  lowStockProducts.length > 0 ? (

                    <li className="text-red-600 font-bold">

                      ⚠️ Low Stock:
                      {" "}
                      {
                        lowStockProducts
                          .map(item => item.name)
                          .join(", ")
                      }

                    </li>

                  ) : (

                    <li className="text-green-600">

                      ✅ Stock Level Good

                    </li>

                  )
                }



              </ul>


            </div>



          </div>


        </main>


      </div>


    </div>

  );

}


export default Dashboard;