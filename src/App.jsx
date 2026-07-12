import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import ProductDetailsPages from "./features/products/pages/ProductDetailsPages";
import ProductsPage from "./features/products/pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import SearchModal from "./features/navbar/searchPart/SearchModal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";

import MainAmazing from "./features/amazingOffer/MainAmazing";
import AmazingDetails from "./features/amazingOffer/AmazingDetails";
import ProductTabs from "./features/amazingOffer/amazingDetails/detailDescription/ProductTabs";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SearchModal />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          {/* AMAZING */}
          <Route path="amazing" element={<MainAmazing />} />

          <Route path="amazing/:id" element={<AmazingDetails />} />
          <Route path="amazing/:id/description" element={<ProductTabs />} />

          {/* news */}
          <Route path="news/:id" element={<NewsDetail />} />

          {/* products */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailsPages />} />

          {/* cart */}
          <Route path="cart" element={<CartPage />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<h1>NOT FOUND - TEST</h1>} />
      </Routes>
    </>
  );
}
