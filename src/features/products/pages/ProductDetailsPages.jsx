import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/product.service";

// Desktop Components
import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";
import ProductsIcons from "../components/productDetails/ProductsIcons";
import DetailsLink from "../components/productDetails/DetailsLink";
import SubscriptionCard from "../components/productDetails/SubscriptionCard";

// Mobile Component
import MobileProduct from "./MobileProduct";

// UI
import LoadingScreen from "../../../components/ui/LoadingScreen";

// Icons
import { FaArrowRight, FaRegBell } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import { TfiExchangeVertical } from "react-icons/tfi";
import { RiPlayListAddLine } from "react-icons/ri";

export default function ProductDetailsPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProductById(id);

        if (isMounted) {
          setProduct(data);
        }
      } catch {
        if (isMounted) {
          setError("خطا در دریافت اطلاعات محصول");
          setProduct(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <LoadingScreen />;

  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  if (!product)
    return <div className="p-6 text-center text-red-500">محصول پیدا نشد</div>;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header Mobile */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-white p-3 border-b shadow-sm">
        <button
          onClick={() => navigate("/products")}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>

        <div className="flex items-center gap-3 text-xl">
          <button
            onClick={() => navigate("/CartPage")}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <BsCart />
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-100">
            <CiMenuKebab />
          </button>
        </div>
      </div>

      {/* ===================== Mobile ===================== */}
      <div className="lg:hidden">
        <MobileProduct product={product} />
      </div>

      {/* ===================== Desktop ===================== */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto">
          <DetailsLink product={product} />
        </div>

        <div className="grid grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto items-start">
          {/* Gallery */}
          <div className="col-span-4 flex gap-4 sticky top-5">
            <div className="flex flex-col items-center gap-6 text-gray-400 pl-2">
              <button className="hover:text-rose-500">
                <IoHeartOutline size={22} />
              </button>

              <button className="hover:text-gray-700">
                <IoShareSocialOutline size={22} />
              </button>

              <button className="hover:text-gray-700">
                <FaRegBell size={20} />
              </button>

              <button className="hover:text-gray-700">
                <TfiExchangeVertical size={18} />
              </button>

              <button className="hover:text-gray-700">
                <RiPlayListAddLine size={21} />
              </button>
            </div>

            <div className="flex-1">
              <ProductGallery product={product} />
            </div>
          </div>

          {/* Info */}
          <div className="col-span-5">
            <ProductInfo product={product} />
            <SubscriptionCard />
          </div>

          {/* Action */}
          <div className="col-span-3 sticky top-5">
            <ProductAction product={product} />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 pb-10">
          <ProductsIcons />
        </div>
      </div>
    </div>
  );
}
