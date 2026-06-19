import React from "react";
import { amazingData } from "../../../../data/amazing.data";
export default function SupermarketItems() {
  return (
    <>
      {amazingData.map((items) => (
        <div className="relative " key={items.id}>
          <img
            src={items.image}
            alt={items.title}
            className="w-[80px] rounded-full border-2 border-gray-100 "
          />
          <span className="absolute  top-15 right-0 text-xs bg-red-700 text-white rounded-full px-2 py-1">
            {items.discount?.toLocaleString("fa-IR")}%
          </span>
        </div>
      ))}
    </>
  );
}
