// amazing-product-description
import { useParams } from "react-router-dom";

import { productDescriptionData } from "../../data/categoriesData/productDescriptionData";

import { amazingProducts } from "../../data/categoriesData/amazingData";

import ProductDescription from "../../components/product-description/ProductDescription";
// start
export default function ProductDescriptionPage() {
  const { id } = useParams();

  const details = productDescriptionData[id];

  const product = amazingProducts.find((item) => item.id === Number(id));

  if (!details || !product) {
    return <div className="p-10 text-center">محصول پیدا نشد</div>;
  }

  return <ProductDescription details={details} product={product} />;
}
// finish
