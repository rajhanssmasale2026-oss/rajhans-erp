import { createContext, useEffect, useState } from "react";
import rawMaterialsData from "../data/rawMaterials";
import { getRawMaterials } from "../services/rawMaterialService";

export const RawMaterialContext = createContext();

export function RawMaterialProvider({ children }) {
  const [rawMaterials, setRawMaterials] = useState(() => {
    const saved = localStorage.getItem("rawMaterials");
    return saved ? JSON.parse(saved) : rawMaterialsData;
  });

  useEffect(() => {
  async function loadMaterials() {
    try {
      const data = await getRawMaterials();

      if (data.length > 0) {
        setRawMaterials(
          data.map((item) => ({
            id: item.id,
            code: item.code,
            name: item.name,
            unit: item.unit,
            stock: Number(item.stock),
            purchasePrice: Number(item.purchase_price),
          }))
        );
      }
    } catch (err) {
      console.error("Error loading raw materials:", err);
    }
  }

  loadMaterials();
}, []);
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