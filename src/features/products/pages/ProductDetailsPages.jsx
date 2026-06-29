import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/product.service";

// components
import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";
import ProductsIcons from "../components/productDetails/ProductsIcons";

// icons
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

// image
import SmileLogo from "../../../assets/logos/smile-favicon.webp";
import DetailsLink from "../components/productDetails/DetailsLink";
import LoadingScreen from "../../../components/ui/LoadingScreen";

export default function ProductDetailsPages() {
  const { id } = useParams();

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

        if (isMounted) setProduct(data);
      } catch (err) {
        if (isMounted) {
          setError("خطا در دریافت اطلاعات محصول");
          setProduct(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // loading UI (Digikala style)
  if (loading) {
    return <LoadingScreen/>
  }
  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="p-6 text-red-500">محصول پیدا نشد</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* sticky header */}
      <div
        className="relative top-0 z-20 flex items-center 
      justify-between bg-white p-3 border-b border-gray-200 shadow-sm lg:hidden"
      >
        <Link
          to="/products"
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaArrowRight />
        </Link>

        <div className="flex items-center gap-3 text-xl">
          <Link
            to="/cart"
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <BsCart />
          </Link>

          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <CiMenuKebab />
          </button>
        </div>
      </div>
      <div className="">
        <DetailsLink product={product} />
      </div>
      {/* main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
        <ProductAction product={product} />
      </div>

      {/* bottom section */}
      <div className="max-w-7xl mx-auto px-5 pb-10">
        <ProductsIcons />
      </div>
    </div>
  );
}
