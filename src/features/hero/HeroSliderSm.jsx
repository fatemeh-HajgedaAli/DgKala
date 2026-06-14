// Hero-Mobile
import React from "react";
import { useState, useEffect } from "react";
import { heroPosterData } from "./heroData";
export default function HeroSliderSm() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === heroPosterData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // start
  return (
    <div className="relative flex overflow-hidden w-full h-full lg:hidden">
      <div
        className="flex h-[100px] gap-2 transition-transform duration-300 ml-10"
        style={{
          transform: `translateX(${index * 100}%)`,
        }}
      >
        {heroPosterData.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="w-full h-full flex-shrink-0 border-xl
             rounded-2xl object-cover mt-5 "
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}
// finished
