import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import poster1 from "../../assets/pictures/HeroPoster/1.gif";
import poster2 from "../../assets/pictures/HeroPoster/2.webp";
import poster3 from "../../assets/pictures/HeroPoster/4.webp";
import poster4 from "../../assets/pictures/HeroPoster/8.webp";
import poster5 from "../../assets/pictures/HeroPoster/5.webp";
import poster6 from "../../assets/pictures/HeroPoster/6.webp";
import poster7 from "../../assets/pictures/HeroPoster/7.webp";
import poster8 from "../../assets/pictures/HeroPoster/8.webp";

const posterData = [
  { id: 1, title: "poster", image: poster1 },
  { id: 2, title: "poster", image: poster2 },
  { id: 3, title: "poster", image: poster3 },
  { id: 4, title: "poster", image: poster4 },
  { id: 5, title: "poster", image: poster5 },
  { id: 6, title: "poster", image: poster6 },
  { id: 7, title: "poster", image: poster7 },
  { id: 8, title: "poster", image: poster8 },
];
export default function HeroSliderLg() {
  const [counter, SetCounter] = useState(0);
  const [showBtns, setShowBtns] = useState(false);
  const myRef = useRef(null);

  // sliders
  const nextSlide = () => {
    SetCounter((prev) => (prev === posterData.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    SetCounter((prev) => (prev === 0 ? posterData.length - 1 : prev - 1));
  };

  //   controlSlider
  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);
  const startAuto = () => {
    stopAuto();
    myRef.current = setInterval(() => {
      SetCounter((prev) => (prev === posterData.length - 1 ? 0 : prev + 1));
    }, 3000);
  };
  const stopAuto = () => {
    if (myRef.current) {
      clearInterval(myRef.current);
    }
  };
  // jsx
  return (
    <>
      <motion.div
        className="relative hidden top-0 lg:flex flex-col overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          stopAuto();
          setShowBtns(true);
        }}
        onMouseLeave={() => {
          startAuto();
          setShowBtns(false);
        }}
      >
        {/* poster */}
        <div className="relative w-full h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={posterData[counter].id}
              src={posterData[counter].image}
              alt={posterData[counter].title}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full  object-cover"
            />
          </AnimatePresence>

          {/* buttoms */}
          <motion.div
            className="absolute bottom-15 right-5 flex gap-2"
            animate={{
              opacity: showBtns ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {" "}
            <button onClick={nextSlide} type="button" className="">
              {/* rightArrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 bg-white lg:w-10 lg:h-10 rounded-full border-slate-300 border-2  text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={prevSlide} type="button" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 bg-white lg:w-10 lg:h-10 rounded-full border-slate-300 border-2
           text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>
          {/* dots */}
          <div className="absolute flex bottom-10 left-1/2 -translate-x-1/2  gap-2 ">
            {posterData.map((_, index) => (
              <div
                key={index}
                className={` w-[5px] h-[5px] rounded-full ${index === counter ? "bg-white w-[20px] " : "bg-gray-400"}`}
                onClick={() => SetCounter(index)}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
