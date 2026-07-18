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

import MobileProduct from "./MobileProduct";

import LoadingScreen from "../../../components/ui/LoadingScreen";

import { useCart } from "../../../context/CartContext";
import CartPreview from "../../../features/cartPart/CartPreview";

// Icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import ProductDescriptionPage from "../components/ProductDescriptionPage";

export default function ProductDetailsPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showCart, setShowCart] = useState(false);

  const { state } = useCart();

  const cartCount = state.items.reduce(
    (sum, item) => sum + Number(item.qty || 0),
    0,
  );

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
          top-4
          left-0
          right-0
          z-50
          flex
          justify-between
          bg-white
          shadow
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

      {/* Link همیشه بالا */}
      <div className="max-w-[1440px] mx-auto px-5 pt-16 lg:pt-5">
        <DetailsLink product={product} />
      </div>

      {/* Mobile */}

      <div className="lg:hidden">
        <MobileProduct product={product} />
       <ProductDescriptionPage product={product}/>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <div
          className="
            grid
            grid-cols-12
            gap-8
            p-5
            max-w-[1440px]
            mx-auto
          "
        >
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
      </div>
    </div>
  );
}
