// main-description-part
import { useParams, useLocation } from "react-router-dom";

// Data
import { productDescriptionData } from "../../data/categoriesData/productDescriptionData";
import { productsDetails } from "../../data/categoriesData/productsDetails.data";

import { AmazingdescriptionData } from "../../data/categoriesData/amazingDescription.Data";
import { amazingProducts } from "../../data/categoriesData/amazingData";

// Components
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";
import StickyBuyBox from "./StickyBuyBox";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const location = useLocation();

  const isAmazing = location.pathname.includes("amazing");

  const details = isAmazing
    ? AmazingdescriptionData[id]
    : productDescriptionData[id];

  const product = isAmazing
    ? amazingProducts.find((item) => item.id === Number(id))
    : productsDetails.find((item) => item.id === Number(id));

  if (!details || !product) {
    return <div className="p-10 text-center">محصول پیدا نشد</div>;
  }

  return (
    <div className="bg-white mt-4 pb-24">
      <ProductTabs product={product} />

      <ProductDescription details={details} product={product} />
    </div>
  );
}
