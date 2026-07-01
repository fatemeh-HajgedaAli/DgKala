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
import AmazingProducts from "./components/catergories/AmazingProducts";
// start
export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* search-modals */}
      <SearchModal />
      {/* routes */}
      <Routes>
        <Route element={<MainLayout />}>
          {/* home */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* offer */}
          <Route path="/offers" element={<AmazingProducts />} />
          {/* newsPart */}
          <Route path="news/:id" element={<NewsDetail />} />
          {/* products */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDetailsPages />} />
          {/* cartPart */}
          <Route path="CartPage" element={<CartPage />} />
        </Route>
        {/* AUTH (NO NAVBAR) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* error Text */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}
