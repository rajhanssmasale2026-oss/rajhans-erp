import { useContext } from "react";

import RawMaterialForm from "../components/RawMaterialForm";
import RawMaterialTable from "../components/RawMaterialTable";

import { RawMaterialContext } from "../context/RawMaterialContext";
import { addRawMaterial as addRawMaterialAPI } from "../services/rawMaterialService";

export default function RawMaterials() {
  const { rawMaterials, addRawMaterial } = useContext(RawMaterialContext);
  const handleSaveMaterial = async (material) => {
  try {
    const newMaterial = {
      code: `RM${String(rawMaterials.length + 1).padStart(3, "0")}`,
      name: material.name,
      unit: material.unit,
      stock: Number(material.stock),
      purchase_price: Number(material.purchasePrice),
    };

    await addRawMaterialAPI(newMaterial);

    alert("Raw Material Saved Successfully");

    window.location.reload();

  } catch (err) {
    console.error(err);
    alert("Error Saving Raw Material");
  }
};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">
        Raw Material Management
      </h1>

      <RawMaterialForm addMaterial={handleSaveMaterial} />

      <RawMaterialTable materials={rawMaterials} />
    </div>
  );
}