import React from "react";

import OtherSellForm from "../components/OtherSellForm";
import OtherSellTable from "../components/OtherSellTable";

function OtherSell() {

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Other Sell
      </h1>

      <OtherSellForm />

      <div className="mt-8">
        <OtherSellTable />
      </div>

    </div>

  );

}

export default OtherSell;