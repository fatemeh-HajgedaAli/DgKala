import { useRef } from "react";
import { Link } from "react-router-dom";

// logo
import bgPattern from "../../../assets/logos/deal-pattern-amazing.svg";

// components
import Button from "../../../components/shared/Button";
import AmazingSlider from "./AmazingDailySlider";

// data
import { amazingProducts } from "../../../data/categoriesData/amazingData";

// icons
import { FaStar } from "react-icons/fa6";

export default function DailyAmazingPart() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative top-5 bg-rose-500 rounded-3xl mx-12 overflow-hidden p-5">
      {/* Buttons */}
      <Button direction="left" onClick={() => slide("left")} />
      <Button direction="right" onClick={() => slide("right")} />

      {/* Header */}
      <div
        className="flex items-center justify-between mb-5"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="flex items-center text-white text-lg gap-2 mx-3 font-bold">
          <FaStar />
          شگفت انگیزها
        </h2>

        <Link
          to="/offers"
          className="bg-white text-rose-600 px-4 py-2 rounded-full text-sm font-medium"
        >
          مشاهده همه
        </Link>
      </div>

      {/* Slider Component */}
      <AmazingSlider ref={sliderRef} products={amazingProducts} />
    </div>
  );
}
