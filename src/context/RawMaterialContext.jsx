import { createContext, useEffect, useState } from "react";
import rawMaterialsData from "../data/rawMaterials";

export const RawMaterialContext = createContext();

export function RawMaterialProvider({ children }) {

  const [rawMaterials, setRawMaterials] = useState(() => {
    return rawMaterialsData;
  });


  useEffect(() => {
    localStorage.setItem(
      "rawMaterials",
      JSON.stringify(rawMaterials)
    );
  }, [rawMaterials]);


  // New Raw Material Add
  const addRawMaterial = (item) => {
    const newItem = {
      id: Date.now(),
      code: "RM" + String(rawMaterials.length + 1).padStart(3, "0"),
      ...item,
    };

    setRawMaterials((prev) => [
      ...prev,
      newItem,
    ]);
  };


  // Purchase झाल्यावर Stock वाढवणे
  const updateStock = (materialName, quantity) => {

    setRawMaterials((prev) =>
      prev.map((item) =>
        item.name === materialName
          ? {
              ...item,
              stock: Number(item.stock) + Number(quantity),
            }
          : item
      )
    );

  };


  // Delete Raw Material
  const deleteRawMaterial = (code) => {

    setRawMaterials((prev) =>
      prev.filter((item) => item.code !== code)
    );

  };


  return (
    <RawMaterialContext.Provider
      value={{
        rawMaterials,
        addRawMaterial,
        updateStock,
        deleteRawMaterial,
      }}
    >
      {children}
    </RawMaterialContext.Provider>
  );
}