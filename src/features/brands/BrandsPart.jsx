import  { useRef, useState, useEffect } from "react";

import SliderBrands from "./SliderBrands";
import BrandsArrow from "./BrandsArrow";
import BrandsTitle from "./BrandsTitle";

// start
export default function BrandsPart() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
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

  return (
    <div
      className="relative lg:flex flex-col hidden  h-[200px]  m-5
     border-2 border-gray-200 rounded-2xl overflow-hidden top-10"
    >
      <BrandsTitle />
      {showRight && (
        <BrandsArrow direction="right" onClick={() => slide("right")} />
      )}

      <div
        ref={sliderRef}
        onScroll={updateButtons}
        className="flex overflow-x-auto no-scrollbar gap-5 
       hide-scrollbar"
      >
        <SliderBrands />
      </div>
      <BrandsArrow direction="left" onClick={() => slide("left")} />
    </div>
  );
}
// finish
