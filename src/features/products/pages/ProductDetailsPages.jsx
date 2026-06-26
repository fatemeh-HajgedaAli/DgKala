import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product.service";

import ProductGallery from "../components/productDetails/ProductsGallary";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductAction from "../components/productDetails/ProductAction";
import ProductSpece from "../components/productDetails/ProductSpece";

export default function ProductDetailsPages() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (!product) return <div>محصول پیدا نشد</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
      <ProductGallery product={product} />
      <ProductInfo product={product} />
      <ProductAction product={product} />

      <div className="lg:col-span-3 mt-10">
        <ProductSpece product={product} />
      </div>
    </div>
  );
}
