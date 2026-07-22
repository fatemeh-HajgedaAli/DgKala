import { useRef } from "react";
import { Link } from "react-router-dom";

// logo
import bgPattern from "../../../../assets/logos/bestSellingPattern-bg.svg";

// components
import Button from "../../../../maincomponents/shared/Button";
import AmazingSlider from "./AmazingDailySlider";

// data
import { amazingProducts } from "../../../../data/categoriesData/amazingData";

// icons
import { FaStar } from "react-icons/fa6";
import { FaStarAndCrescent } from "react-icons/fa";
// start
export default function DailyAmazingPart() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="daily-amazing"
      className="relative top-5 bg-rose-500 lg:rounded-3xl lg:mx-4 overflow-hidden p-4"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Buttons */}
      <div className="hidden lg:flex">
        <Button direction="left" onClick={() => slide("left")} />
        <Button direction="right" onClick={() => slide("right")} />
      </div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="flex items-center text-white text-lg gap-2 font-bold">
          <FaStar />
          شگفت انگیزها
        </h2>

        <Link
          to="/amazing"
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
