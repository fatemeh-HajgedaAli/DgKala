import { useParams } from "react-router-dom";

import { productDescriptionData } from "../../../data/categoriesData/productDescriptionData";

import ProductDescription from "../../../components/product-description/ProductDescription";

export default function ProductDescriptionPage({ product }) {
  const { id } = useParams();

  const details = productDescriptionData[id];

  if (!product || !details) {
    return null;
  }

  return (
    <div
      className="
        bg-white
        mt-4
        pb-24
      "
    >
      <ProductDescription details={details} product={product} />
    </div>
  );
}
