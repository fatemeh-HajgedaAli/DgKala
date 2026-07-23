// Amazing-Crasoul-main
import React, { useRef, useState, useEffect } from "react";
import OfferArrow from "./OfferArrow";
import OfferSlider from "./OfferSlider";
import OffersText from "./OffersText";

export default function AmazingCarousal({ duration = 86400000 }) {
  // دریافت زمان کل تخفیف اسلایدر
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  const slide = (dir) => {
    if (!sliderRef.current) return;

    // در سیستم‌های RTL، مقدار اسکرول چپ ممکن است منفی باشد
    const scrollAmount = dir === "left" ? -300 : 300;
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const updateButtons = () => {
    const el = sliderRef.current;
    if (!el) return;

    // بررسی دقیق موقعیت اسکرول
    const isAtStart = Math.abs(el.scrollLeft) < 5;
    const isAtEnd =
      Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 5;

    setShowRight(!isAtStart);
    setShowLeft(!isAtEnd);
  };

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, []);

  return (
    <div
      className="relative flex h-[280px] lg:h-[350px] bg-rose-500 
    lg:rounded-3xl overflow-hidden top-10 lg:mr-[100px] lg:mx-10"
    >
      {/* پاس دادن زمان به کامپوننت متنی */}
      <OffersText duration={duration} />

      {showRight && (
        <OfferArrow direction="right" onClick={() => slide("right")} />
      )}

      <div
        ref={sliderRef}
        onScroll={updateButtons}
        className="flex overflow-x-auto hide-scrollbar no-scrollbar gap-5 p-4 w-full lg:mr-[200px]"
      >
        <OfferSlider className="flex items-center" />
      </div>

      {showLeft && (
        <OfferArrow direction="left" onClick={() => slide("left")} />
      )}
    </div>
  );
}
