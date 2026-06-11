import React from "react";
import { useState, useEffect } from "react";
import poster1 from "../../assets/pictures/HeroPoster/1.gif";
import poster2 from "../../assets/pictures/HeroPoster/2.webp";
import poster3 from "../../assets/pictures/HeroPoster/4.webp";
import poster4 from "../../assets/pictures/HeroPoster/3.webp";
import poster5 from "../../assets/pictures/HeroPoster/5.webp";
import poster6 from "../../assets/pictures/HeroPoster/6.webp";
import poster7 from "../../assets/pictures/HeroPoster/7.webp";
import poster8 from "../../assets/pictures/HeroPoster/8.webp";

export default function HeroSliderSm() {
  const [index, setIndex] = useState(0);
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
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === posterData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="relative flex overflow-hidden w-full 
     h-full lg:hidden "
    >
      <div
        className="flex h-[100px] gap-2 transition-transform 
        duration-300 ml-10 "
        style={{
          transform: `translateX(${index * 100}%)`,
        }}
      >
        {posterData.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="w-full h-full flex-shrink-0 border-xl rounded-2xl object-cover mt-5 "
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}
