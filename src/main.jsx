import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// context
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import { MiniCartProvider } from "./context/MiniCartContext.jsx";
import { AddressProvider } from "./context/AddressContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <MiniCartProvider>
          <CartProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </CartProvider>
        </MiniCartProvider>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>,
);
