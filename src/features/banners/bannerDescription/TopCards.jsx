import React from "react";
import { topdata } from "../../../data/description.data";

export default function TopCards() {
  return (
    <div className="relative hidden lg:flex flex-row gap-5  mx-30 my-15 ">
      {topdata.map((item) => (
        <div key={item.id} className="shrink-0 ">
          <img
            src={item.image}
            alt={item.title}
            className="w-[300px] h-auto rounded-xl border-1 border-gray-100 shadow-xl"
          />
        </div>
      ))}
    </div>
  );
}
