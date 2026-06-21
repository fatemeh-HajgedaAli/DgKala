import { useRef } from "react";
import ProductsItems from "./ProductsItems";
import { FaFire } from "react-icons/fa";
import Button from "../../../components/shared/Button";

export default function ShopingByCategories() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = el.offsetWidth * 0.8;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative hidden lg:flex flex-col bg-white py-10 mx-[100px]">
      {/* Header */}
      <div className="flex justify-center items-center justify-between mb-8 w-full">
        <p className="flex items-center gap-2 text-2xl font-medium">
          <FaFire className="text-orange-400 text-2xl" />
          داغ ترین چند ساعت گذشته
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full">
        {/* Buttons */}
        <Button
          direction="left"
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        />

        <Button
          direction="right"
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        />

        {/* Slider */}
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
            hide-scrollbar
            w-full
          "
        >
          <ProductsItems />
        </div>
      </div>
    </section>
  );
}
