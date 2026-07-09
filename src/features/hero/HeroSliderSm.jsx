import { useState, useEffect } from "react";
import { heroPosterData } from "../../data/componentData/heroData";

export default function HeroSliderSm() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === heroPosterData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden lg:hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${index * 100}%)`,
        }}
      >
        {heroPosterData.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0 px-3 pt-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[180px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {heroPosterData.map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
