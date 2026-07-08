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
    setRawMaterials((prev) => [
      ...prev,
      {
        id: Date.now(),
        code: "RM" + String(prev.length + 1).padStart(3, "0"),
        ...item,
      },
    ]);
  };

  const updateStock = (materialName, quantity) => {
    setRawMaterials((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.name.trim().toLowerCase() ===
          materialName.trim().toLowerCase()
      );

      if (index !== -1) {
        return prev.map((item, i) =>
          i === index
            ? {
                ...item,
                stock:
                  Number(item.stock) +
                  Number(quantity),
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id: Date.now(),
          code:
            "RM" +
            String(prev.length + 1).padStart(3, "0"),
          name: materialName,
          stock: Number(quantity),
        },
      ];
    });
  };

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