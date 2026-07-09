// شگفت‌انگیز سفارشی

import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/shared/Button";
import AmazingBuySlider from "./AmazingBuySlider";
// icon
import { FaBullhorn } from "react-icons/fa";

// data
import { amazingProducts } from "../../../../data/categoriesData/amazingData";

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
    <section className="mx-5 mt-6 items-center lg:border-gray-200 lg:border-1 ">
      {/* header */}
      <div className="flex flex-col my-5 mx-5 ">
        <h2 className="flex items-center gap-2 font-bold text-gray-800">
          <FaBullhorn className="text-red-400 font-bold" />
          شگفت‌انگیز سفارشی
        </h2>
        <div className="flex h-[3px] w-[100px] bg-red-600 mt-2"></div>
        {/* <Link to="/amazing" className="text-red-500 text-sm">
          مشاهده همه
        </Link> */}
      </div>

      {/* slider */}
      <div className="relative bg-white  overflow-hidden">
        <div className="lg:flex hidden">
          {" "}
          <Button direction="left" onClick={() => slide("left")} />
          <Button direction="right" onClick={() => slide("right")} />
        </div>

        <AmazingBuySlider ref={sliderRef} products={amazingProducts} />
      </div>
    </section>
  );
}
