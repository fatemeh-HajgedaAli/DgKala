import { useRef } from "react";
import { Link } from "react-router-dom";
// icons
import { FaClock, FaStar } from "react-icons/fa6";
// logo
import bgPattern from "../../../../assets/logos/deal-pattern-amazing.svg";
// components
import Button from "../../../../components/shared/Button";
import AmazingSlider from "./EndAmazingSlider";

// data
import { amazingProducts } from "../../../../data/categoriesData/amazingData";
// slider
import EndAmazingSlider from "./EndAmazingSlider";
import { CiClock1, CiLock } from "react-icons/ci";
// start
export default function EndAmazingOffer() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative top-5  lg:rounded-xl lg:mx-5 overflow-hidden p-5 lg:border-1 
    border-gray-300 "
    >
      {/* Buttons */}
      <div className="lg:flex hidden">
        <Button direction="left" onClick={() => slide("left")} />
        <Button direction="right" onClick={() => slide("right")} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-block ">
          <h2 className="flex  items-center gap-2 text-xl font-bold text-gray-800">
            <CiClock1 />
            شگفت‌انگیزهای رو به اتمام
          </h2>

          <div className="mt-2 h-0.5 w-16 bg-red-500 rounded"></div>
        </div>
        <Link
          to="/amazing"
          className="text-red-500 text-sm font-medium hover:text-red-600"
        >
          مشاهده همه
        </Link>
      </div>

      {/* Slider Component */}
      <EndAmazingSlider ref={sliderRef} products={amazingProducts} />
    </div>
  );
}
