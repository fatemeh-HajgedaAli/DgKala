import { useRef } from "react";
import ProductsItems from "./productCategories/ProductsItems";
import Button from "../../components/shared/Button";

export default function ShopingByCategories() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative hidden lg:flex items-center 
     bg-white py-5 overflow-hidden">
      <Button direction="left" onClick={() => slide("left")} />
      <Button direction="right" onClick={() => slide("right")} />

      <div
        ref={sliderRef}
        className="flex flex-row gap-3 
         flex-wrap overflow-x-auto"
      >
        <ProductsItems />
      </div>
    </div>
  );
}
