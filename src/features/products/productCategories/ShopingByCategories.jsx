import { useRef } from "react";
import ProductsItems from "./ProductsItems";
import Button from "../../../components/shared/Button";

export default function ShopingByCategories() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative hidden lg:flex items-center bg-white py-10 mx-25">
      <Button direction="left" onClick={() => slide("left")} />
      <Button direction="right" onClick={() => slide("right")} />
      <div
        ref={sliderRef}
        className="
          grid
          grid-flow-col
          grid-rows-2
          auto-cols-max
          gap-14
          overflow-x-auto
          scroll-smooth 
          hide-scrollbar"
      >
        <ProductsItems />
      </div>
    </div>
  );
}
