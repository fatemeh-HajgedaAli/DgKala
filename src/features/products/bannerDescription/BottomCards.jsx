import React from "react";
import { bottomData } from "./description.Data";

export default function TopCards() {
  return (
    <div className="flex flex-wrap mt-20 gap-5 mx-25 my-6 lg:flex-nowrap lg:overflow-x-auto lg:mt-15">
      {bottomData.map((item) => (
        <div key={item.id} className="shrink-0 ">
          <img
            src={item.image}
            alt={item.title}
            className="w-[120px] lg:w-[300px] lg:h-auto rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
