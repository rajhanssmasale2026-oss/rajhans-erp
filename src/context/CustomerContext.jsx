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
    setCustomers((prev) => {
      const exists = prev.find(
        (c) =>
          c.name.trim().toLowerCase() ===
          customer.name.trim().toLowerCase()
      );

      if (exists) return prev;

      return [
        ...prev,
        {
          id: Date.now(),
          code:
            "CUS" +
            String(prev.length + 1).padStart(3, "0"),

          name: customer.name,
          address: customer.address || "",
          mobile: customer.mobile || "",

          totalPurchase: 0,
          totalReceived: 0,
          balance: 0,
          creditSince: "",
        },
      ];
    });
  };

  const getCustomer = (name) => {
    return customers.find(
      (c) =>
        c.name.trim().toLowerCase() ===
        name.trim().toLowerCase()
    );
  };

  const addSaleToCustomer = (
    customerName,
    mobile,
    amount
  ) => {
    setCustomers((prev) => {
      let found = false;

      const updated = prev.map((customer) => {
        if (
          customer.name.trim().toLowerCase() !==
          customerName.trim().toLowerCase()
        ) {
          return customer;
        }

        found = true;

        const purchase =
          Number(customer.totalPurchase) +
          Number(amount);

        return {
          ...customer,
          mobile:
            customer.mobile || mobile,
          totalPurchase: purchase,
          balance:
            purchase -
            Number(customer.totalReceived),
          creditSince:
            customer.creditSince ||
            new Date().toLocaleDateString(),
        };
      });

      if (found) return updated;

      return [
        ...updated,
        {
          id: Date.now(),
          code:
            "CUS" +
            String(updated.length + 1).padStart(
              3,
              "0"
            ),
          name: customerName,
          address: "",
          mobile: mobile,
          totalPurchase: Number(amount),
          totalReceived: 0,
          balance: Number(amount),
          creditSince:
            new Date().toLocaleDateString(),
        },
      ];
    });
  };

  const receivePayment = (
    customerName,
    amount
  ) => {
    setCustomers((prev) =>
      prev.map((customer) => {
        if (
          customer.name.trim().toLowerCase() !==
          customerName.trim().toLowerCase()
        )
          return customer;

        const received =
          Number(customer.totalReceived) +
          Number(amount);

        return {
          ...customer,
          totalReceived: received,
          balance:
            Number(customer.totalPurchase) -
            received,
        };
      })
    );
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        getCustomer,
        addSaleToCustomer,
        receivePayment,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}