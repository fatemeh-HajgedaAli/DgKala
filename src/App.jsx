import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import ProductDetailsPage from "./features/products/pages/ProductDetailsPages";
import ProductsPage from "./features/products/pages/ProductsPage";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/news/:id" element={<NewsDetail />} />

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      {/* Cart-part */}
      <Route path="/cart" element={<Cart />} />
      {/* error-part */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
