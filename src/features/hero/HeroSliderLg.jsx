// desktop-Hero
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHeroSlider from "../../hooks/useHeroSlider";
import HeroArrow from "./HeroArrow";
import { heroPosterData } from "../../data/componentData/heroData";
import HeroStory from "../HeroStory/HeroStory";
// start
export default function HeroSliderLg() {
  const [showBtns, setShowBtns] = useState(false);
  const { index, next, prev, goTo, start, stop } = useHeroSlider(
    heroPosterData.length,
    4000,
  );

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleDragStart = (x) => {
    isDragging.current = true;
    startX.current = x;
    stop();
  };

  const handleDragEnd = (x) => {
    if (!isDragging.current) return;

    const diff = x - startX.current;

    const threshold = 60;

    if (diff > threshold) prev();
    else if (diff < -threshold) next();

    isDragging.current = false;
    start();
  };
  // jsx
  return (
    <>
      <motion.div
        className="relative hidden 
      lg:flex flex-col overflow-hidden
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
        <div
          className="relative w-full min-h-[500px] lg:h-[500px] overflow-hidden"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onMouseLeave={() => {
            if (isDragging.current) {
              isDragging.current = false;
              start();
            }
          }}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        >
          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.img
              key={heroPosterData[index].id}
              src={heroPosterData[index].image}
              alt={heroPosterData[index].title}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-[500px] object-cover select-none pointer-events-none"
            />
          </AnimatePresence>

          {/* ARROWS */}
          <motion.div
            className="absolute bottom-1/6 right-4 flex gap-2"
            animate={{ opacity: showBtns ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <HeroArrow direction="right" onClick={prev} />
            <HeroArrow direction="left" onClick={next} />
          </motion.div>

          {/* DOTS */}
          <div className="absolute flex bottom-1/6 left-1/2 -translate-x-1/2 gap-2">
            {heroPosterData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "bg-white w-5 h-2" : "bg-gray-400 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
// finish
