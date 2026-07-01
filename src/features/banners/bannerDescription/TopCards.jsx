// DESCRIPTION - BANNER

import React from "react";
import { topdata } from "../../../data/componentData/description.data";
// START
export default function TopCards() {
  return (
    <div
      className="
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex
        gap-5 
        px-3 sm:px-5 lg:px-20
        mt-25 lg:mt-15
      "
    >
      {topdata.map((item) => (
        <div key={item.id} className="w-full">
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-[120px] sm:h-[140px] md:h-[160px] lg:h-auto
              object-cover
              rounded-xl
            "
          />
        </div>
      ))}
    </div>
  );
}
// FINISH
