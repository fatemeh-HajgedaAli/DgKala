import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/product.service";

import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";

import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import ProductsIcons from "../components/productDetails/ProductsIcons";

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

        if (isMounted) {
          setProduct(data);
        }
      } catch (err) {
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

  if (loading) return <div className="p-5">در حال بارگذاری...</div>;
  if (error) return <div className="p-5 text-red-500">{error}</div>;
  if (!product) return <div className="p-5 text-red-500">محصول پیدا نشد</div>;

  return (
    <>
      {/* fixed header */}
      <div className="fixed top-0 left-0 right-0 flex justify-between bg-white z-20 p-3 text-2xl lg:hidden">
        <Link to="/products">
          {" "}
          <FaArrowRight />
        </Link>

        <div className="flex gap-4">
          <Link to="/cart">
            <BsCart />
          </Link>

          <CiMenuKebab />
        </div>
      </div>

      {/* offset for fixed header */}
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
        <ProductAction product={product} />
      </div>
      <div className="">
        <ProductsIcons />
      </div>
    </>
  );
}
