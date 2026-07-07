import { createContext, useEffect, useState } from "react";

export const PurchaseContext = createContext();

export function PurchaseProvider({ children }) {
  const [purchases, setPurchases] = useState(() => {
    const data = localStorage.getItem("purchases");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  const addPurchase = (purchase) => {
    setPurchases((prev) => [...prev, purchase]);
  };

  const deletePurchase = (index) => {
    setPurchases((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        addPurchase,
        deletePurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}