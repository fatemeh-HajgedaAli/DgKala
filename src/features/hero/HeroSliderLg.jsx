// Hero-desktop

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHeroSlider from "./useHeroSlider";
import HeroArrow from "./HeroArrow";
import { heroPosterData } from "./heroData";

export default function HeroSliderLg() {
  const [showBtns, setShowBtns] = useState(false);

  const { index, next, prev, goTo, start, stop } = useHeroSlider(
    heroPosterData.length,
  );
  // jsx
  return (
    <>
      <motion.div
        className="relative hidden top-0 lg:flex flex-col overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          stop();
          setShowBtns(true);
        }}
        onMouseLeave={() => {
          start();
          setShowBtns(false);
        }}
      >
        {/* poster */}
        <div className="relative w-full h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroPosterData[index].id}
              src={heroPosterData[index].image}
              alt={heroPosterData[index].title}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full  object-cover"
            />
          </AnimatePresence>

          {/* buttoms */}
          <motion.div
            className="absolute bottom-15 right-4 flex gap-2 m-2"
            animate={{
              opacity: showBtns ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <HeroArrow direction="right" onClick={prev} />
            <HeroArrow direction="left" onClick={next} />
          </motion.div>

          {/* dots */}
          <div className="absolute flex bottom-10 left-1/2 -translate-x-1/2  gap-2 ">
            {heroPosterData.map((_, i) => (
              <div
                key={i}
                className={`w-[5px] h-[5px] rounded-full ${
                  i === index ? "bg-white w-[20px]" : "bg-gray-400"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
