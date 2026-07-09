// story-icons
import React, { useRef, useState } from "react";
import HeroStoryModal from "./HeroStoryModal";
import { heroStoryData } from "../../data/componentData/heroStory.data";
import { FiMoreHorizontal } from "react-icons/fi";
// start
export default function HeroStory() {
  const containerRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    const container = containerRef.current;

    isDown.current = true;
    container.classList.add("cursor-grabbing");

    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    container.scrollLeft = scrollLeft.current - walk;
  };
  // jsx
  return (
    <div className="flex w-full justify-center">
      <div
        ref={containerRef}
        className="
          flex items-start
          gap-8 sm:gap-4 md:gap-8
          overflow-x-auto overflow-y-hidden
          hide-scrollbar
          px-3 sm:px-4 md:px-6 lg:px-10
          py-3
          cursor-grab
          select-none
        "
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {heroStoryData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center shrink-0 w-[60px] sm:w-[70px] md:w-[80px]"
          >
            <img
              src={item.image}
              alt={item.title}
              draggable={false}
              className="
                w-[45px] h-[45px]
                sm:w-[50px] sm:h-[50px]
                md:w-[60px] md:h-[60px]
                rounded-full object-cover
                pointer-events-none
              "
            />

            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-center leading-tight">
              {item.title}
            </span>
          </div>
        ))}

        <div className="flex flex-col items-center shrink-0 w-[60px] sm:w-[70px] md:w-[80px]">
          <button
            onClick={() => setOpenModal(true)}
            className="
              w-[45px] h-[45px]
              sm:w-[50px] sm:h-[50px]
              md:w-[60px] md:h-[60px]
              rounded-full
              bg-gray-100
              border
              flex items-center justify-center
            "
          >
            <FiMoreHorizontal />
          </button>

          <span className="mt-2 text-[10px] sm:text-xs md:text-sm">بیشتر</span>
        </div>
      </div>
      <HeroStoryModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
// finish
