import React from "react";

function PriceHistory({ product, onClose }) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg w-96">

        <h2 className="text-xl font-bold mb-4">
          📜 Price History
        </h2>


        <h3 className="font-semibold mb-3">
          {product.name}
        </h3>


        {(!product.priceHistory ||
          product.priceHistory.length === 0) ? (

          <p>
            No Price History Found
          </p>

        ) : (

          product.priceHistory.map((item, index) => (

            <div
              key={index}
              className="border p-3 mb-2 rounded"
            >

              <p>
                Sale Price : ₹ {item.salePrice}
              </p>

              <p>
                Effective From : {item.effectiveFrom}
              </p>

              <p className="text-sm text-gray-500">
                Changed At : {item.changedAt}
              </p>

            </div>

          ))

        )}


        <button
          onClick={onClose}
          className="bg-red-600 text-white px-4 py-2 rounded mt-3"
        >
          Close
        </button>


      </div>

    </div>
  );
}

export default PriceHistory;