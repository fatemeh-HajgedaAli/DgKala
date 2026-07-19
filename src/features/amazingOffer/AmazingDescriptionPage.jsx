// amazing-product-description
import { useParams } from "react-router-dom";

import { AmazingdescriptionData } from "../../data/categoriesData/amazingDescription.Data";

import { amazingProducts } from "../../data/categoriesData/amazingData";

import ProductDescription from "../../components/product-description/ProductDescription";
import ProductTabs from "../../components/product-description/ProductTabs";
import StickyBuyBox from "../../components/product-description/StickyBuyBox";

// start
export default function AmazingDescriptionPage() {
  const { id } = useParams();

  const details = AmazingdescriptionData[id];

  const product = amazingProducts.find((item) => item.id === Number(id));

  if (!details || !product) {
    return <div className="p-10 text-center">محصول پیدا نشد</div>;
  }

  return (
    <>
      <ProductTabs />
      <ProductDescription details={details} product={product} />;
      <StickyBuyBox/>

    </>
  );
}
// finish
