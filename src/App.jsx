import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import ProductDetailsPages from "./features/products/pages/ProductDetailsPages";
import ProductsPage from "./features/products/pages/ProductsPage";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="news/:id" element={<NewsDetail />} />

          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailsPages />} />

          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}
