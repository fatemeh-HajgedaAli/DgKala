// APP.JS
import { Routes, Route } from "react-router-dom";
// FEATURES
import ProductDetailsPages from "./features/products/pages/ProductDetailsPages";
import ProductsPage from "./features/products/pages/ProductsPage";
import SearchModal from "./features/navbar/searchPart/SearchModal";
import MainAmazing from "./features/amazingOffer/MainAmazing";
import AmazingDetails from "./features/amazingOffer/AmazingDetails";
import ProductDescriptionPage from "./components/product-description/ProductDescriptionPage";
import CheckoutShipping from "./pages/CheckoutShipping";
// PAGES
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
// LAYOUT
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
// ui
import ScrollToTop from "./components/ui/ScrollToTop";

// START
export default function App() {
  return (
    <>
      <ScrollToTop />
      <SearchModal />

      <Routes>
        {/* روت‌های دارای هدر و فوتر اصلی سایت */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          {/* AMAZING */}
          <Route path="amazing" element={<MainAmazing />} />
          <Route path="amazing/:id" element={<AmazingDetails />} />
          <Route
            path="amazing/:id/description"
            element={<ProductDescriptionPage />}
          />
          <Route
            path="product/:id/description"
            element={<ProductDescriptionPage />}
          />

          {/* news */}
          <Route path="news/:id" element={<NewsDetail />} />

          {/* products */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailsPages />} />

          {/* cart */}
          <Route path="cart" element={<CartPage />} />
        </Route>

        {/* 2. روت صفحه جدید - خارج از لایوت اصلی برای داشتن هدر اختصاصی */}
        <Route path="checkout/shipping" element={<CheckoutShipping />} />

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* questions */}
        <Route path="/questions" element={<FAQ />} />

        <Route path="*" element={<h1>NOT FOUND - TEST</h1>} />
      </Routes>
    </>
  );
}
