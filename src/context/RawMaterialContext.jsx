import { createContext, useEffect, useState } from "react";
import rawMaterialsData from "../data/rawMaterials";

export const RawMaterialContext = createContext();

export function RawMaterialProvider({ children }) {
  const [rawMaterials, setRawMaterials] = useState(() => {
    const saved = localStorage.getItem("rawMaterials");
    return saved ? JSON.parse(saved) : rawMaterialsData;
  });

  useEffect(() => {
    localStorage.setItem(
      "rawMaterials",
      JSON.stringify(rawMaterials)
    );
  }, [rawMaterials]);

  const addRawMaterial = (item) => {
    const newItem = {
      ...item,
      code: "RM" + String(rawMaterials.length + 1).padStart(3, "0"),
    };

    setRawMaterials([...rawMaterials, newItem]);
  };

  const deleteRawMaterial = (code) => {
    setRawMaterials(
      rawMaterials.filter((item) => item.code !== code)
    );
  };

  return (
    <RawMaterialContext.Provider
      value={{
        rawMaterials,
        addRawMaterial,
        deleteRawMaterial,
      }}
    >
      {children}
    </RawMaterialContext.Provider>
  );
}