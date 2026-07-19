// product-details-page
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/product.service";

// Components
import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";
import ProductsIcons from "../components/productDetails/ProductsIcons";
import DetailsLink from "../components/productDetails/DetailsLink";
import SubscriptionCard from "../components/productDetails/SubscriptionCard";
import ProductTabs from "../../../components/product-description/ProductTabs";
import ProductDescriptionPage from "../../../components/product-description/ProductDescriptionPage";

import MobileProduct from "./MobileProduct";
import LoadingScreen from "../../../components/ui/LoadingScreen";
import { useCart } from "../../../context/CartContext";
import CartPreview from "../../../features/cartPart/CartPreview";

// Icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

export default function ProductDetailsPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { state } = useCart();
  const cartCount = state.items.reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // افزایش مقدار برای هماهنگی بهتر در موبایل
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        setError("خطا در دریافت محصول");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <LoadingScreen />;
  if (error) return <div className="p-5 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-white pb-10" dir="rtl">
      {showCart && <CartPreview closeCart={() => setShowCart(false)} />}

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-12 flex justify-between bg-white px-3 py-2 border-b border-gray-100">
        <button onClick={() => navigate("/products")}>
          <FaArrowRight size={18} />
        </button>
        <button onClick={() => setShowCart(true)} className="relative">
          <BsCart size={21} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Sticky Tabs Container */}
      <div
        className={`lg:hidden fixed left-0 right-0 z-40 bg-white shadow-sm transition-all duration-300 ${
          isSticky
            ? "top-12 opacity-100 visible"
            : "-top-12 opacity-0 invisible"
        }`}
      >
        <ProductTabs product={product} />
      </div>

      {/* Link همیشه بالا */}
      <div id="details-link" className="flex px-3 py-4 mt-12 lg:mt-0">
        <DetailsLink product={product} />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileProduct product={product} />
        <ProductDescriptionPage product={product} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto">
          {/* Gallery */}
          <div className="col-span-4 sticky top-24 self-start">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="col-span-5">
            <ProductInfo product={product} />
            <SubscriptionCard />
          </div>

          {/* Sticky Buy Box (Seller) */}
          <div className="col-span-3 sticky top-24 self-start">
            <ProductAction product={product} />
          </div>
        </div>

        <ProductsIcons />

        {/* اضافه شدن منوی تب‌ها در دسکتاپ قبل از بخش توضیحات کامپوننت */}
        <ProductTabs product={product} />
        <div className="max-w-[1440px] mx-auto p-5">
          <ProductDescriptionPage product={product} />
        </div>
      </div>
    </div>
  );
}
