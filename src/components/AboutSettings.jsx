function AboutSettings() {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6">
        ℹ️ About ERP
      </h2>

      <div className="space-y-4">

        <div className="border-b pb-3">
          <p className="text-gray-500">
            ERP Version
          </p>

          <p className="font-bold text-lg">
            Version 1.0
          </p>
        </div>

        <div className="border-b pb-3">
          <p className="text-gray-500">
            Developer
          </p>

          <p className="font-bold text-lg">
            Hemant Salunke
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Last Updated
          </p>

          <p className="font-bold text-lg">
            July 2026
          </p>
        </div>

      </div>

    </div>

  );

}

export default AboutSettings;