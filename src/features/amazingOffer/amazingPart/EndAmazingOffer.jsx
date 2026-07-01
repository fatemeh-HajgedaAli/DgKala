import { useRef } from "react";
import { Link } from "react-router-dom";

// logo
import bgPattern from "../../../assets/logos/deal-pattern-amazing.svg";

// components
import Button from "../../../components/shared/Button";
import AmazingSlider from "./EndAmazingSlider";

// data
import { amazingProducts } from "../../../data/categoriesData/amazingData";

// icons
import { FaClock, FaStar } from "react-icons/fa6";
import EndAmazingSlider from "./EndAmazingSlider";

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
      className="relative top-5  rounded-xl mx-5 overflow-hidden p-5 border-1 
    border-gray-300 "
    >
      {/* Buttons */}
      <Button direction="left" onClick={() => slide("left")} />
      <Button direction="right" onClick={() => slide("right")} />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <click className="text-red-500" />
          شگفت‌انگیزهای رو به اتمام
        </h2>

        <Link
          to="/offers"
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
