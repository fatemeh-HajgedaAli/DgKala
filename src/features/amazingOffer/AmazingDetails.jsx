import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { amazingProducts } from "../../data/categoriesData/amazingData";

// components
// import ProductGallery from "../components/productDetails/ProductsGallary";
// import ProductInfo from "../components/productDetails/ProductInfo";
// import ProductAction from "../components/productDetails/ProductAction";
// import ProductsIcons from "../components/productDetails/ProductsIcons";
// import DetailsLink from "../components/productDetails/DetailsLink";
// import LoadingScreen from "../../../components/ui/LoadingScreen";

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

  // هندل کردن وضعیت لودینگ
  if (loading) {
    return <LoadingScreen />;
  }

  // هندل کردن خطای عدم وجود محصول
  if (error || !product) {
    return (
      <div className="p-6 text-red-500 text-center font-bold">
        {error || "محصول پیدا نشد"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Sticky Mobile Header */}
      <div
        className="relative top-0 z-20 flex items-center 
        justify-between bg-white p-3 border-b border-gray-200 shadow-sm lg:hidden"
      >
        <button
          onClick={() => navigate(-1)} // بازگشت به صفحه قبل
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

      {/* Breadcrumbs / Links */}
      <div>
        <DetailsLink product={product} />
      </div>

      {/* Main Layout (Digikala Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto">
        {/* بخش تصاویر محصول */}
        <ProductGallery product={product} />

        {/* بخش ویژگی‌ها و عنوان محصول */}
        <ProductInfo product={product} />

        {/* باکس خرید، قیمت و گارانتی */}
        <ProductAction product={product} />
      </div>

      {/* Bottom Features Icons */}
      <div className="max-w-7xl mx-auto px-5 pb-10">
        <ProductsIcons />
      </div>
    </div>
  );
}
