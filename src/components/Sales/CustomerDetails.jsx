import React from "react";

function CustomerDetails({
  sale,
  handleChange,
}) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5">

      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={sale.customerName}
        onChange={handleChange}
        className="border rounded p-3"
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={sale.mobile}
        onChange={handleChange}
        className="border rounded p-3"
      />

    </div>
  );
}

export default CustomerDetails;