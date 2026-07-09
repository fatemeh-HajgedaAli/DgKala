import { useRef, useState, useEffect } from "react";
import SliderBrands from "./SliderBrands";
import BrandsArrow from "./BrandsArrow";
import BrandsTitle from "./BrandsTitle";

export default function BrandsPart() {
  const sliderRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // متغیرهای کمکی برای قابلیت درگ با ماوس
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;

    // استفاده از Math.abs برای سازگاری کامل با حالت‌های RTL (فارسی) و LTR
    const maxScroll = el.scrollWidth - el.clientWidth;
    const current = Math.abs(el.scrollLeft);

    setShowLeft(current > 5);
    setShowRight(current < maxScroll - 5);
  };

  const scroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = 300;
    // تشخیص جهت صفحه (راست‌به‌چپ یا چپ‌به‌راست) برای اسکرول صحیح دکمه‌ها
    const isRTL = window.getComputedStyle(el).direction === "rtl";

    let scrollAmount = direction === "left" ? -amount : amount;
    if (isRTL) {
      // در حالت RTL جهت اسکرول برعکس می‌شود
      scrollAmount = direction === "left" ? amount : -amount;
    }

    el.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // بررسی وضعیت دکمه‌ها در اولین رندر
  useEffect(() => {
    updateArrows();
    // در صورت تغییر سایز صفحه دکمه‌ها دوباره بررسی شوند
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  // --- منطقِ درگ کردن با ماوس (Mouse Drag to Scroll) ---
  const handleMouseDown = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    const el = sliderRef.current;
    if (!el || !isDown.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    el.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="relative w-full mt-5 mx-3 border border-gray-300 rounded-xl bg-white overflow-hidden">
      <BrandsTitle />

      {/* LEFT */}
      {showLeft && (
        <BrandsArrow direction="left" onClick={() => scroll("left")} />
      )}

      {/* RIGHT */}
      {showRight && (
        <BrandsArrow direction="right" onClick={() => scroll("right")} />
      )}

      <div
        ref={sliderRef}
        className="
          flex
          overflow-x-auto
          gap-4
          px-3 py-3
          scroll-smooth
          select-none
          cursor-grab active:cursor-grabbing
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateArrows}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <SliderBrands />
      </div>
    </div>
  );
}
