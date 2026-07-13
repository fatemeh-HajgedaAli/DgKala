import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/product.service";

// components
import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";
import ProductsIcons from "../components/productDetails/ProductsIcons";
import DetailsLink from "../components/productDetails/DetailsLink";
import LoadingScreen from "../../../components/ui/LoadingScreen";

// icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import { RiPlayListAddLine } from "react-icons/ri";
import SubscriptionCard from "../components/productDetails/SubscriptionCard";

export default function ProductDetailsPages() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProductById(id);
        if (isMounted) setProduct(data);
      } catch (err) {
        if (isMounted) {
          setError("خطا در دریافت اطلاعات محصول");
          setProduct(null);
        }
      } finally {
        // تغییر به finally برای اجرای حتمی پایان لودینگ
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <LoadingScreen />;
  if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;
  if (!product)
    return <div className="p-6 text-red-500 text-center">محصول پیدا نشد</div>;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* sticky header برای موبایل */}
      <div className="relative top-0 z-20 flex items-center justify-between bg-white p-3 border-b border-gray-200 shadow-sm lg:hidden">
        <button
          onClick={() => navigate("/products")}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaArrowRight />
        </button>
        <div className="flex items-center gap-3 text-xl">
          <button
            onClick={() => navigate("/CartPage")}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <BsCart />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <CiMenuKebab />
          </button>
        </div>
      </div>

      {/* مسیر صفحات بالای محصول */}
      <div className="max-w-[1440px] mx-auto">
        <DetailsLink product={product} />
      </div>

      {/* لایوت دسکتاپ ۱۲ ستونه */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-5 max-w-[1440px] mx-auto items-start">
        {/* ستون راست: آیکون‌ها + گالری عکس */}
        <div className="lg:col-span-4 flex flex-row gap-4 sticky top-5">
          <div className="flex flex-col items-center gap-6 text-gray-400 pl-2">
            <button className="hover:text-rose-500 transition cursor-pointer">
              <IoHeartOutline size={22} />
            </button>
            <button className="hover:text-gray-700 transition cursor-pointer">
              <IoShareSocialOutline size={22} />
            </button>
            <button className="hover:text-gray-700 transition cursor-pointer">
              <FaRegBell size={20} />
            </button>
            <button className="hover:text-gray-700 transition cursor-pointer">
              <TfiExchangeVertical size={18} />
            </button>
            <button className="hover:text-gray-700 transition cursor-pointer">
              <RiPlayListAddLine size={21} />
            </button>
          </div>

          <div className="flex-1">
            <ProductGallery product={product} />
          </div>
        </div>

        {/* ستون وسط: توضیحات و ویژگی‌ها */}
        <div className="lg:col-span-5">
          <ProductInfo product={product} />
          <div className="">
            <SubscriptionCard />
          </div>
        </div>

        {/* ستون چپ: باکس خرید */}
        <div className="lg:col-span-3 lg:sticky lg:top-5">
          <ProductAction product={product} />
        </div>
      </div>

      {/* بخش آیکون‌های مزایا */}
      <div className="max-w-[1440px] mx-auto px-5 pb-10">
        <ProductsIcons />
      </div>
    </div>
  );
}
