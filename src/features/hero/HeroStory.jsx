// Hero-icons-story
import React from "react";
import { heroStoryData } from "./heroData";
import { FiMoreHorizontal } from "react-icons/fi";
export default function HeroStory() {
  return (
    <>
      <div
        className="relative flex  bottom-5
          overflow-hidden top-5  bg-white "
      >
        <div
          className="flex flex-nowrapp justify-center
          h-auto w-full gap-15
        overflow-x-auto
        overflow-y-hidden
       hide-scrollbar
       items-start
       
       
        "
        >
          {heroStoryData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col shrink-0 items-center  "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[50px] h-[50px]  object-contain"
              />
              <span className="text-sm text-center leading-tight mt-2 ">
                {item.title}
              </span>
            </div>
          ))}
          {/* btn */}
          <div className="flex flex-col items-center">
            {" "}
            <button
              type="button"
              className="
    w-[50px]
    h-[50px]
    shrink-0
    rounded-full
    border
    border-gray-300
    shadow-sm
    flex
    items-center
    justify-center
    bg-gray-200
  "
            >
              <FiMoreHorizontal />
            </button>
            <span>بیشتر</span>
          </div>
        </div>
      </div>
    </>
  );
}
