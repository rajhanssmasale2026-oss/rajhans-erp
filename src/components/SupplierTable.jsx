function SupplierTable({
  suppliers,
  deleteSupplier,
}) {


  return (

    <div className="bg-white mt-6 p-6 rounded-xl shadow">


      <h2 className="text-2xl font-bold mb-4">
        Supplier List
      </h2>



      <table className="w-full border">


        <thead>

          <tr className="border">


            <th className="border p-2">
              Name
            </th>


            <th className="border p-2">
              Mobile
            </th>


            <th className="border p-2">
              GST
            </th>


            <th className="border p-2">
              Address
            </th>


            <th className="border p-2">
              Action
            </th>


          </tr>

        </thead>



        <tbody>


          {suppliers.map((item) => (


            <tr
              key={item.id}
              className="border"
            >


              <td className="border p-2">
                {item.name}
              </td>


              <td className="border p-2">
                {item.mobile}
              </td>


              <td className="border p-2">
                {item.gst || "-"}
              </td>


              <td className="border p-2">
                {item.address}
              </td>


              <td className="border p-2">


                <button

                  onClick={() =>
                    deleteSupplier(item.id)
                  }

                  className="bg-red-600 text-white px-3 py-1 rounded"

                >

                  Delete

                </button>


              </td>


            </tr>


          ))}


        </tbody>


      </table>


    </div>

  );

}


export default SupplierTable;