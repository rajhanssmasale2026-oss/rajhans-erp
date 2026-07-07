import { useContext } from "react";

import RawMaterialForm from "../components/RawMaterialForm";
import RawMaterialTable from "../components/RawMaterialTable";

import { RawMaterialContext } from "../context/RawMaterialContext";

export default function RawMaterials() {
  const { rawMaterials, addRawMaterial } = useContext(RawMaterialContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">
        Raw Material Management
      </h1>

      <RawMaterialForm addMaterial={addRawMaterial} />

      <RawMaterialTable materials={rawMaterials} />
    </div>
  );
}