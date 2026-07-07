import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ProductProvider } from "./context/ProductContext";
import { PurchaseProvider } from "./context/PurchaseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <PurchaseProvider>
          <App />
        </PurchaseProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);