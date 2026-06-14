import React, { useRef } from "react";
import useOfferSlider from "./useOffersSlider";
import OfferArrow from "./OfferArrow";
import OfferSlider from "./OfferSlider";

export default function AmazingCarousal({}) {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-row bg-red-600 w-full 
      overflow-x-hidden scroll-smooth no-scrollbar ">
        {/* LEFT ARROW */}
        <OfferArrow direction="left" onClick={() => slide("left")} />
        {/* SLIDEER */}
        <OfferSlider sliderRef={sliderRef} />
        {/* RIGHT ARROW */}
        <OfferArrow direction="right" onClick={() => slide("right")} />
      </div>
    </>
  );
}
