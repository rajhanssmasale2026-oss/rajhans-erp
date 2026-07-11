import React from "react";

function AddSaleButton({
  handleAddSale,
}) {
  return (
    <div className="mt-6 flex justify-end">
      <button
        onClick={handleAddSale}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg"
      >
        Save Sale
      </button>
    </div>
  );
}

export default AddSaleButton;