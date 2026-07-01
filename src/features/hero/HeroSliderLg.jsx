import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHeroSlider from "../../hooks/useHeroSlider";
import HeroArrow from "./HeroArrow";
import { heroPosterData } from "../../data/componentData/heroData";

export default function HeroSliderLg() {
  const [showBtns, setShowBtns] = useState(false);

  const { index, next, prev, goTo, start, stop } = useHeroSlider(
    heroPosterData.length,
    4000,
  );

  // drag refs
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // ---------- DRAG ----------
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    stop();
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - dragStartX.current;

    if (diff > 60) prev();
    else if (diff < -60) next();

    isDragging.current = false;
    start();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      start();
    }
  };

  // touch
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    stop();
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - dragStartX.current;

    if (diff > 60) prev();
    else if (diff < -60) next();

    start();
  };

  return (
    <motion.div
      className="relative hidden lg:flex flex-col overflow-hidden 
      cursor-grab active:cursor-grabbing"
      onMouseEnter={() => {
        stop();
        setShowBtns(true);
      }}
      onMouseLeave={() => {
        start();
        setShowBtns(false);
      }}
    >
      {/* SLIDER CONTAINER */}
      <div
        className="relative w-full h-screen overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={heroPosterData[index].id}
            src={heroPosterData[index].image}
            alt={heroPosterData[index].title}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-[500px] object-cover select-none pointer-events-none"
          />
        </AnimatePresence>

        {/* ARROWS */}
        <motion.div
          className="absolute bottom-1/3 right-4 flex gap-2"
          animate={{ opacity: showBtns ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HeroArrow direction="right" onClick={prev} />
          <HeroArrow direction="left" onClick={next} />
        </motion.div>

        {/* DOTS */}
        <div className="absolute flex bottom-1/3 left-1/2 -translate-x-1/2 gap-2">
          {heroPosterData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === index ? "bg-white w-5 h-2" : "bg-gray-400 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
