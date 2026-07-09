import React from "react";
import { topdata } from "../../../data/componentData/description.data";

export default function TopCards() {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        gap-4
        px-3 sm:px-5 lg:px-16 lg:mx-5
        items-center
        mt-6 mx-5 
      "
    >
      {topdata.map((item) => (
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
              hover:scale-[1.02]
              transition
            "
          />
        </div>
      ))}
    </div>
  );
}
