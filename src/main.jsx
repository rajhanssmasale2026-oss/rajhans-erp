import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { ProductProvider } from "./context/ProductContext.jsx";
import { RawMaterialProvider } from "./context/RawMaterialContext.jsx";
import { PurchaseProvider } from "./context/PurchaseContext.jsx";
import { SalesProvider } from "./context/SalesContext.jsx";
import { CustomerProvider } from "./context/CustomerContext.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <RawMaterialProvider>
          <PurchaseProvider>
            <SalesProvider>
              <CustomerProvider>
                <ExpenseProvider>
                  <App />
                </ExpenseProvider>
              </CustomerProvider>
            </SalesProvider>
          </PurchaseProvider>
        </RawMaterialProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);