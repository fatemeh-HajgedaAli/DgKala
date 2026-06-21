import BestSellingItems from "./BestSellingItems";
import { useRef, useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";
import Button from "../../../components/shared/Button";
import { Link } from "react-router";

export default function MainBestSelling() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);
  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
    onScroll = { updateButtons };
  };
  const updateButtons = () => {
    const el = sliderRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft === 0;

    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    setShowRight(!isAtStart && !isAtEnd);
  };

  useEffect(() => {
    updateButtons();
  }, []);

  // start JSX
  return (
    <>
      <div className="  relative hidden lg:block bg-white 
       mx-5  mt-5   border border-gray-200  rounded-2xl   p-5">
        <div className="flex items-center justify-between mb-8">
          <div className="w-20"> {/* for center items */}</div>
          <p className="flex items-center gap-2 text-2xl font-medium">
            <FaFire className="text-orange-400 text-2xl" />
            پرفروش‌ترین کالاها
          </p>
          <button type="button" className="text-blue-400 text-sm font-medium">
            <Link to="/">مشاهده همه</Link>
          </button>
        </div>

        {/* BTNS */}
        <Button direction="left" onClick={() => slide("left")} />
        {showRight && (
          <Button direction="right" onClick={() => slide("right")} />
        )}
        {/* SLIDER */}
        <div
          ref={sliderRef}
          onScroll={updateButtons}
          className="
      grid grid-flow-col grid-rows-3 auto-cols-max gap-x-10 overflow-x-auto scroll-smooth hide-scrollbar
    "
        >
          <BestSellingItems />
        </div>
      </div>
    </>
  );
}
