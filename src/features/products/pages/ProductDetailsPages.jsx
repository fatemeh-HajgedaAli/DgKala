import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Service
import { getProductById } from "../services/product.service";

// Product Components
import ProductsGallary from "../components/productDetails/ProductsGallary";
import ProductInformation from "../components/productDetails/ProductInformation";
import ProductAction from "../components/productDetails/ProductAction";
import ProductsIcons from "../components/productDetails/ProductsIcons";
import ProductDetailsLink from "../components/productDetails/ProductDetailsLink";
import ProductSubscriptionCard from "../components/productDetails/ProductSubscriptionCard";

// Product Description
import ProductDescriptionPage from "../../../maincomponents/product-description/ProductDescriptionPage";
import ProductTabs from "../../../maincomponents/product-description/ProductTabs";

// Mobile
import MobileProduct from "./MobileProduct";

// Cart
import CartPreview from "../../cartPart/CartPreview";

// UI
import LoadingScreen from "../../../maincomponents/ui/LoadingScreen";

// Context
import { useCart } from "../../../context/CartContext";

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
  const [isMobileSticky, setIsMobileSticky] = useState(false);
  const [hideNavbarMenu, setHideNavbarMenu] = useState(false);

  const { state } = useCart();

  const cartCount = state.items.reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0,
  );

  // =====================================
  // SCROLL
  // =====================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // MOBILE
      if (window.innerWidth < 1024) {
        setIsMobileSticky(scrollY > 450);
        setHideNavbarMenu(false);
        return;
      }

      // DESKTOP
      setIsMobileSticky(false);
      setHideNavbarMenu(scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // =====================================
  // FETCH PRODUCT
  // =====================================

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
        setError("خطا در دریافت محصول");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  // =====================================
  // LOADING
  // =====================================

  if (loading) {
    return <LoadingScreen />;
  }

  // =====================================
  // ERROR
  // =====================================

  if (error) {
    return <div className="p-5 text-red-500 text-center">{error}</div>;
  }

  // =====================================
  // NO PRODUCT
  // =====================================

  if (!product) {
    return <div className="p-5 text-gray-500 text-center">محصول پیدا نشد</div>;
  }

  // =====================================
  // JSX
  // =====================================

  return (
    <div className="min-h-screen bg-white pb-10 relative" dir="rtl">
      {/* CART PREVIEW */}

      {showCart && <CartPreview closeCart={() => setShowCart(false)} />}

      {/* ===================================== */}
      {/* MOBILE HEADER */}
      {/* ===================================== */}

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
          items-center
          bg-white
          px-3
          py-2
          border-b
          border-gray-100
        "
      >
        {/* BACK */}

        <button
          onClick={() => navigate("/products")}
          aria-label="بازگشت به محصولات"
        >
          <FaArrowRight size={18} />
        </button>

        {/* CART */}

        <button
          onClick={() => setShowCart(true)}
          className="relative"
          aria-label="سبد خرید"
        >
          <BsCart size={21} />

          {cartCount > 0 && (
            <span
              className="
                absolute
                -top-2
                -left-2
                bg-red-500
                text-white
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* ===================================== */}
      {/* MOBILE STICKY TABS */}
      {/* ===================================== */}

      <div
        className={`
          lg:hidden
          fixed
          left-0
          right-0
          z-40
          bg-white
          shadow-sm
          transition-all
          duration-300
          ${
            isMobileSticky
              ? "top-12 opacity-100 visible"
              : "-top-12 opacity-0 invisible"
          }
        `}
      >
        <ProductTabs product={product} />
      </div>

      {/* ===================================== */}
      {/* DETAILS LINK */}
      {/* ===================================== */}

      <div id="details-link" className="flex px-3 py-4 mt-12 lg:mt-0">
        <ProductDetailsLink product={product} />
      </div>

      {/* ===================================== */}
      {/* MOBILE PRODUCT */}
      {/* ===================================== */}

      <div className="lg:hidden">
        <MobileProduct product={product} />

        <ProductDescriptionPage product={product} />
      </div>

      {/* ===================================== */}
      {/* DESKTOP */}
      {/* ===================================== */}

      <div className="hidden lg:block">
        {/* ===================================== */}
        {/* PRODUCT MAIN INFO */}
        {/* ===================================== */}

        <div className="grid grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto">
          {/* GALLERY */}

          <div className="col-span-4 sticky top-24 self-start">
            <ProductsGallary product={product} />
          </div>

          {/* INFORMATION */}

          <div className="col-span-5">
            <ProductInformation product={product} />

            <ProductSubscriptionCard />
          </div>

          {/* BUY BOX */}

          <div className="col-span-3 sticky top-24 self-start">
            <ProductAction product={product} />
          </div>
        </div>

        {/* ===================================== */}
        {/* PRODUCT ICONS */}
        {/* ===================================== */}

        <ProductsIcons />

        {/* ===================================== */}
        {/* DESKTOP PRODUCT TABS */}
        {/* ===================================== */}

        <div
          className="
            sticky
            top-0
            z-40
            bg-white
            border-y
            border-gray-100
            shadow-sm
          "
        >
          <ProductTabs product={product} />
        </div>

        {/* ===================================== */}
        {/* DESCRIPTION */}
        {/* ===================================== */}

        <div className="max-w-[1440px] mx-auto p-5">
          <ProductDescriptionPage product={product} />
        </div>
      </div>
    </div>
  );
}
