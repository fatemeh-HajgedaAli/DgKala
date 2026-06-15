import React, { useRef, useState, useEffect } from "react";
import OfferArrow from "./OfferArrow";
import OfferSlider from "./OfferSlider";
import OffersText from "./OffersText";

export default function AmazingCarousal() {
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
    <div className="relative flex h-[350px] bg-rose-600 rounded-r-3xl overflow-hidden top-10 mr-30">
      <OffersText />

      {showRight && (
        <OfferArrow direction="right" onClick={() => slide("right")} />
      )}

      <div
        ref={sliderRef}
        onScroll={updateButtons}
        className="flex overflow-x-auto no-scrollbar gap-5 p-4 w-full mr-50"
      >
        <OfferSlider />
      </div>

      <OfferArrow direction="left" onClick={() => slide("left")} />
 
    </div>
  );
}
