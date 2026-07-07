import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ProductProvider } from "./context/ProductContext";
import { PurchaseProvider } from "./context/PurchaseContext";
import { RawMaterialProvider } from "./context/RawMaterialContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <PurchaseProvider>
          <RawMaterialProvider>
            <App />
          </RawMaterialProvider>
        </PurchaseProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);