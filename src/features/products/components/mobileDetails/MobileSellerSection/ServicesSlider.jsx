import { useRef } from "react";
import DigiPayCard from "./DigiPayCard";
import PlusCard from "./PlusCard";

export default function ServicesSlider() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("active");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="pt-2" dir="rtl">
      <span
        className="block text-xs font-bold 
      text-gray-800 px-4 py-2 select-none"
      >
        خدمات پرداخت و ارسال
      </span>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="
          flex
          flex-row
          overflow-x-auto
          gap-3
          px-2
          py-2
          snap-x
          snap-mandatory
          scrollbar-none
          cursor-grab
          active:cursor-grabbing
          select-none
        "
      >
        <div className="snap-center shrink-0">
          <DigiPayCard />
        </div>
        <div className="snap-center shrink-0">
          <PlusCard />
        </div>
      </div>
    </div>
  );
}
