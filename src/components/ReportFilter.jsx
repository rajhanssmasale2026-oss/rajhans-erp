function ReportFilter() {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        📅 Report Filter
      </h2>

      <div className="grid grid-cols-4 gap-4">

        <div>

          <label className="block mb-2 font-semibold">
            From Date
          </label>

          <input
            type="date"
            className="border rounded-lg p-3 w-full"
          />

        </div>


        <div>

          <label className="block mb-2 font-semibold">
            To Date
          </label>

          <input
            type="date"
            className="border rounded-lg p-3 w-full"
          />

        </div>


        <div className="flex items-end">

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
          >
            🔍 Search
          </button>

        </div>


        <div className="flex items-end">

          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg w-full"
          >
            🔄 Reset
          </button>

        </div>

      </div>

    </div>

  );

}

export default ReportFilter;