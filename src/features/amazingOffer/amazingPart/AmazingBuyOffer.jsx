// شگفت‌انگیز سفارشی

import { useRef } from "react";
import Button from "../../../components/shared/Button";
import  AmazingBuySlider  from "./AmazingBuySlider";

import { amazingProducts } from "../../../data/categoriesData/amazingData";
import { FaFire } from "react-icons/fa6";
import { Link } from "react-router-dom";
// start
export default function AmazingBuyOffer() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };
  // jsx
  return (
    <section className="mx-5 mt-6 border-gray-200 border-1 ">
      {/* header */}
      <div className="flex justify-between items-center my-5 mx-5">
        <h2 className="flex items-center gap-2 font-bold text-gray-800">
          <FaFire className="text-red-400" />
          شگفت‌انگیز سفارشی
        </h2>

        <Link to="/amazing" className="text-red-500 text-sm">
          مشاهده همه
        </Link>
      </div>

      {/* slider */}
      <div className="relative bg-white  overflow-hidden">
        <Button direction="left" onClick={() => slide("left")} />
        <Button direction="right" onClick={() => slide("right")} />

        <AmazingBuySlider ref={sliderRef} products={amazingProducts} />
      </div>
    </section>
  );
}
