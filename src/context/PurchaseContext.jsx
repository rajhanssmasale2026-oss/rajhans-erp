import { createContext, useEffect, useState } from "react";
import {
  getPurchases,
  addPurchase as addPurchaseAPI,
} from "../services/purchaseService";

export const PurchaseContext = createContext();

export function PurchaseProvider({ children }) {
  const [purchases, setPurchases] = useState(() => {
    const saved = localStorage.getItem("purchases");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
  async function loadPurchases() {
    try {
      const data = await getPurchases();

      if (Array.isArray(data)) {
        setPurchases(
          data.map((item) => ({
            id: item.id,
            date: item.purchase_date,
            billNo: item.bill_no,
            supplier: item.supplier,
            material: item.material,
            quantity: item.quantity,
            rate: item.rate,
            total: item.total,
            remarks: item.remarks,
          }))
        );
      }
    } catch (err) {
      console.error("Error loading purchases:", err);
    }
  }

  loadPurchases();
}, []);
useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  const addPurchase = (purchase) => {
    setPurchases((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...purchase,
      },
    ]);
  };

  const deletePurchase = (id) => {
    setPurchases((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const updatePurchase = (id, data) => {
    setPurchases((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, ...data }
          : item
      )
    );
  };
  const totalPurchase =
  purchases.reduce(
    (sum, item) =>
      sum +
      Number(
        item.total ||
        item.totalAmount ||
        item.amount ||
        0
      ),
    0
  );

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        addPurchase,
        deletePurchase,
        updatePurchase,
         totalPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}