import React from "react";
import { brandsData } from "../../data/brands.data";

export default function SliderBrands() {
  return (
    <div className="flex flex-row justify-start flex-nowrap">
      {brandsData.map((item) => (
        <div
          key={item.id}
          className="flex shrink-0 border-l border-gray-200  py-2 "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-30 h-30 object-contain m-2"
          />
        </div>
      ))}
    </div>
  );
}
