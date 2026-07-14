import { useState } from "react";

function PriceEditModal({
  product,
  onSave,
  onClose,
}) {
  const [salePrice, setSalePrice] = useState(
    product.salePrice
  );

  const [effectiveFrom, setEffectiveFrom] =
    useState(
      product.effectiveFrom ||
        new Date()
          .toISOString()
          .split("T")[0]
    );

  const handleSave = () => {
    if (
      salePrice === "" ||
      Number(salePrice) <= 0
    ) {
      alert("Enter Valid Sale Price");
      return;
    }

    onSave(
      product.code,
      Number(salePrice),
      effectiveFrom
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl p-6 w-[420px]">

        <h2 className="text-2xl font-bold mb-5">
          ✏️ Edit Sale Price
        </h2>

        <div className="space-y-4">

          <div>

            <label className="font-semibold">
              Product
            </label>

            <input
              value={product.name}
              disabled
              className="border w-full p-3 rounded bg-gray-100"
            />

          </div>

          <div>

            <label className="font-semibold">
              Sale Price
            </label>

            <input
              type="number"
              value={salePrice}
              onChange={(e) =>
                setSalePrice(
                  e.target.value
                )
              }
              className="border w-full p-3 rounded"
            />

          </div>

          <div>

            <label className="font-semibold">
              Effective From
            </label>

            <input
              type="date"
              value={effectiveFrom}
              onChange={(e) =>
                setEffectiveFrom(
                  e.target.value
                )
              }
              className="border w-full p-3 rounded"
            />

          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-5 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default PriceEditModal;