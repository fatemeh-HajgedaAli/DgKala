import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { amazingProducts } from "../../data/categoriesData/amazingData";

// details (Desktop)
import AmazingGallary from "./amazingDetails/AmazingGallary";
import AmazingInfo from "./amazingDetails/AmazingInfo";
import AmazingAction from "./amazingDetails/AmazingAction";
import DetailsLink from "./amazingDetails/DetailsLink";
import LoadingPart from "./amazingDetails/LoadingPart";
import AmazingIcons from "./amazingDetails/AmazingIcons";
import AmazingSpece from "./amazingDetails/AmazingSpece";

// Mobile View Component
import MobileProductLayout from "./MobileProductLayout"; // 👈 کامپوننت موبایل را اینجا ایمپورت کنید

// icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

export default function AmazingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const foundProduct = amazingProducts.find((p) => p.id === Number(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("محصول شگفت‌انگیز مورد نظر پیدا نشد");
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <LoadingPart />;
  }

  if (error || !product) {
    return (
      <div className="p-6 text-red-500 text-center font-bold">
        {error || "محصول پیدا نشد"}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 md:bg-white" dir="rtl">
      {/* 📱 Sticky Mobile Header (مخصوص موبایل) */}
      <div className="relative top-0 z-20 flex items-center justify-between bg-white p-3 border-b border-gray-200 shadow-sm lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaArrowRight />
        </button>

        <div className="flex items-center gap-3 text-xl">
          <button
            onClick={() => navigate("/cart")}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <BsCart />
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <CiMenuKebab />
          </button>
        </div>
      </div>

      {/* 📱 نمای واکنش‌گرا (Responsive Rendering) */}

      {/* ۱. بخش موبایل: در حالت عادی پدیدار است و در سایز lg به بالا مخفی می‌شود */}
      <div className="block lg:hidden">
        <div className="p-2 bg-white">
          <AmazingGallary product={product} />{" "}
        </div>
        <MobileProductLayout product={product} />
      </div>

      {/* ۲. بخش دسکتاپ: در موبایل کلاً hidden است و از سایز lg به بالا رندر می‌شود */}
      <div className="hidden lg:block">
        {/* Breadcrumbs */}
        <DetailsLink product={product} />

        {/* Main Layout Desktop */}
        <div className="max-w-7xl mx-auto p-5 space-y-6">
          <div className="grid grid-cols-1 lg:grid-rows-3 gap-6">
            <AmazingGallary product={product} />
            <AmazingInfo product={product} />
            <AmazingSpece product={product} />
            <AmazingAction product={product} />
          </div>

          {/* icons */}
          <AmazingIcons product={product} />
        </div>
      </div>
    </div>
  );
}
