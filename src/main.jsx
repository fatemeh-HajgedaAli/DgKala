import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// context
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import { MiniCartProvider } from "./context/MiniCartContext";
import { AddressProvider } from "./context/AddressContext";
import { AuthProvider } from "./context/AuthContext";
import { StoryProvider } from "./context/StoryProvider";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <StoryProvider>
          <MiniCartProvider>
            <CartProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </CartProvider>
          </MiniCartProvider>
        </StoryProvider>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>,
);
