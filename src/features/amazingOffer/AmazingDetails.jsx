import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data
import { amazingProducts } from "../../data/categoriesData/amazingData";

// Components (Desktop)
import AmazingOfferAction from "./amazingDetails/AmazingOfferAction";
import AmazingGallary from "./amazingDetails/AmazingGallary";
import AmazingInfo from "./amazingDetails/AmazingInfo";
import AmazingFeature from "./amazingDetails/AmazingFeature";
import AmazingDetailsLink from "./amazingDetails/AmazingDetailsLink";

// Components (Mobile & Shared)
import MobileProductLayout from "./AmazingMobileProduct";
import ProductTabs from "../../components/product-description/ProductTabs";

import { AmazingdescriptionData } from "../../data/categoriesData/amazingDescription.Data";

// Context & Cart
import { useCart } from "../../context/CartContext";
import CartPreview from "../cartPart/CartPreview";
// utils
import { toFarsiNumber } from "../../utils/number";
// Icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import ProductDescriptionPage from "../../components/product-description/ProductDescriptionPage";
// start
export default function AmazingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useCart();

  const [showCart, setShowCart] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // پیدا کردن محصول
  const product = useMemo(() => {
    return amazingProducts.find((item) => item.id === Number(id));
  }, [id]);

  // محاسبه بهینه تعداد آیتم‌های سبد خرید
  const cartCount = useMemo(() => {
    return state.items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  }, [state.items]);

  // مدیریت رفتار اسکرول برای چسبنده شدن تب‌ها
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="text-center py-10 text-gray-500" dir="rtl">
        محصول پیدا نشد
      </div>
    );
  }
  // jsx
  return (
    <div className="min-h-screen bg-white pb-10" dir="rtl">
      {showCart && <CartPreview closeCart={() => setShowCart(false)} />}

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden">
        {/* Header */}
        <div
          className="fixed top-4 left-0 right-0 z-50 
        h-12 flex justify-between bg-white px-4 py-4"
        >
          <button onClick={() => navigate(-1)}>
            <FaArrowRight size={18} />
          </button>

          <button onClick={() => setShowCart(true)} className="relative">
            <BsCart size={21} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {toFarsiNumber(cartCount)}
              </span>
            )}
          </button>
        </div>

        {/* Sticky Tabs */}
        <div
          className={`fixed left-0 right-0 z-40 bg-white
             shadow-sm transition-all duration-300 ${
               isSticky
                 ? "top-14 opacity-100 visible"
                 : "-top-20 opacity-0 invisible"
             }`}
        >
          <ProductTabs product={product} />
        </div>

        {/* Breadcrumb / Links */}
        <div id="details-link" className="flex px-3 pt-10 pb-0">
          <AmazingDetailsLink product={product} />
        </div>

        <MobileProductLayout product={product} />
        <ProductDescriptionPage product={product}/>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto">
          {/* Gallery */}
          <div className="col-span-4 sticky top-5">
            <AmazingGallary product={product} />
          </div>

          {/* Info */}
          <div className="col-span-5 space-y-5">
            <AmazingInfo product={product} />
            <AmazingFeature product={product} />
          </div>

          {/* Action (Buy Box) */}
          <div className="col-span-3 sticky top-5">
            <AmazingOfferAction product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
