import React from "react";

function AddSaleButton({ handleAddSale }) {
  return (
    <button
      onClick={handleAddSale}
      className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Add Sale
    </button>
  );
}

export default AddSaleButton;