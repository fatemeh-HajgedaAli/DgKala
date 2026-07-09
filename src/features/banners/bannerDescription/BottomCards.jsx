import React from "react";
import { bottomData } from "../../../data/componentData/description.data";

export default function BottomCards() {
  return (
    <div
      className="
      hidden
        lg:grid
        sm:grid-cols-3
        lg:grid-cols-4
        gap-4
        px-3 sm:px-5 lg:px-16
        mt-10
        mx-5
      "
    >
      {bottomData.map((item) => (
        <div key={item.id} className="w-full">
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-[120px]
              sm:h-[140px]
              md:h-[160px]
              lg:h-[200px]
              object-cover
              rounded-xl
            "
          />
        </div>
      ))}
    </div>
  );
}
