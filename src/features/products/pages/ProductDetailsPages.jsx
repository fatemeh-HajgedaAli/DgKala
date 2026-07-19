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
import ProductTabs from "../../../components/product-description/ProductTabs"; // فرض کردم اسم کامپوننت اینه

import MobileProduct from "./MobileProduct";
import LoadingScreen from "../../../components/ui/LoadingScreen";
import { useCart } from "../../../context/CartContext";
import CartPreview from "../../../features/cartPart/CartPreview";

// Icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import ProductDescriptionPage from "../components/ProductDescriptionPage";
// start
export default function ProductDetailsPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // وضعیت برای چک کردن اینکه کاربر اسکرول کرده یا نه
  const [isSticky, setIsSticky] = useState(false);

  const { state } = useCart();

  const cartCount = state.items.reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0,
  );

  // افکت برای گوش دادن به اسکرول صفحه
  useEffect(() => {
    const handleScroll = () => {
      // اگر بیشتر از 150 پیکسل اسکرول شد، تب‌ها فیکس بشن
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Cart Preview */}
      {showCart && <CartPreview closeCart={() => setShowCart(false)} />}

      {/* Mobile Header */}
      <div
        className="
          lg:hidden
          fixed
          top-0
          left-0
          right-0
          z-50
          h-12
          flex
          justify-between
          bg-white
          px-3
          py-2
        "
      >
        <button onClick={() => navigate("/products")}>
          <FaArrowRight size={18} />
        </button>
        <button onClick={() => setShowCart(true)} className="relative">
          <BsCart size={21} />
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -left-2 bg-red-500 
            text-white text-[10px] w-5 h-5 rounded-full flex items-center
             justify-center"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Sticky Tabs Container */}
      <div
        className={`lg:hidden fixed left-0 right-0 z-40 
          bg-white shadow-sm transition-all duration-300 ${
            isSticky
              ? "top-12 opacity-100 visible"
              : "-top-10 opacity-0 invisible"
          }`}
      >
        <ProductTabs product={product} />
      </div>
      {/* Link همیشه بالا */}
      <div id="details-link" className="flex px-3 py-4 ">
        <DetailsLink product={product} />
      </div>
      <div className="lg:hidden">
        {/* Mobile Product Info */}
        <MobileProduct product={product} />

        {/* بخش توضیحات و ویژگی‌ها */}
        <ProductDescriptionPage product={product} />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto">
          {/* Gallery */}
          <div className="col-span-4 sticky top-5">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="col-span-5">
            <ProductInfo product={product} />
            <SubscriptionCard />
          </div>

          {/* Seller */}
          <div className="col-span-3 sticky top-5">
            <ProductAction product={product} />
          </div>
        </div>
        <ProductsIcons />
        <ProductDescriptionPage product={product} />
      </div>
    </div>
  );
}
