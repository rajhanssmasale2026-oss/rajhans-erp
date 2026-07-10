import { createContext, useEffect, useState } from "react";

export const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("customers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers((prev) => [
      ...prev,
      {
        id: Date.now(),
        code:
          "CUS" +
          String(prev.length + 1).padStart(3, "0"),

        name: customer.name,
        address: customer.address,
        mobile: customer.mobile,

        totalPurchase: 0,
        totalReceived: 0,
        balance: 0,
        creditSince: "",
      },
    ]);
  };

  const updateCustomer = (id, data) => {
    setCustomers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, ...data }
          : item
      )
    );
  };

  const deleteCustomer = (id) => {
    setCustomers((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const addSaleToCustomer = (
    customerName,
    amount
  ) => {
    setCustomers((prev) =>
      prev.map((customer) => {
        if (customer.name !== customerName)
          return customer;

        const purchase =
          Number(customer.totalPurchase) +
          Number(amount);

        const received =
          Number(customer.totalReceived);

        const balance =
          purchase - received;

        return {
          ...customer,
          totalPurchase: purchase,
          balance: balance,
          creditSince:
            customer.creditSince ||
            new Date().toLocaleDateString(),
        };
      })
    );
  };

  const receivePayment = (
    customerName,
    amount
  ) => {
    setCustomers((prev) =>
      prev.map((customer) => {
        if (customer.name !== customerName)
          return customer;

        const received =
          Number(customer.totalReceived) +
          Number(amount);

        const purchase =
          Number(customer.totalPurchase);

        return {
          ...customer,
          totalReceived: received,
          balance:
            purchase - received,
        };
      })
    );
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        addSaleToCustomer,
        receivePayment,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}