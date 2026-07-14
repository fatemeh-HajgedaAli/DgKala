// amazing-product-description
import { useParams } from "react-router-dom";

import { descriptionData } from "../../../data/categoriesData/amazingDescription.Data";

import { amazingProducts } from "../../../data/categoriesData/productsDetails.data";

import ProductDescription from "../../../components/product-description/ProductDescription";
// start
export default function ProductDescriptionPage() {
  const { id } = useParams();

  const details = descriptionData[id];

  const product = amazingProducts.find((item) => item.id === Number(id));

  if (!details || !product) {
    return <div className="p-10 text-center">محصول پیدا نشد</div>;
  }

  return <ProductDescription details={details} product={product} />;
}
// finish
