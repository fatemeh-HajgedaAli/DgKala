import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import { MiniCartProvider } from "./context/MiniCartContext.jsx"; // ✅ اینو اضافه کن

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <MiniCartProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MiniCartProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
);
