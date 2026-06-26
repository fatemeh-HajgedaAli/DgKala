import React from "react";
import { useState } from "react";
import { amazingData } from "../../data/offersData";
import OfferItems from "./OfferItems";
import useMainSlider from "../../hooks/useMainSlider";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function OfferSlider({ sliderRef, handleScroll }) {
  const { index, next, prev } = useMainSlider(amazingData.length);

  return (
    <>
      <div className="relative flex flex-row gap-3  ">
        {amazingData.map((item) => (
          <OfferItems key={item.id} item={item} />
        ))}

        {/* more btn/card */}
        <div
          className="w-[100px] h-[210px] mt-12 lg:mt-5
      lg:w-[200px] lg:h-[300px] shrink-0 flex flex-col 
      items-center justify-center bg-white rounded-l-xl 
      cursor-pointer hover:shadow-md transition"
        >
          <Link to="/products">
            <PiArrowCircleLeftThin
              className="text-blue-600 
          text-5xl font-light cursor-pointer"
            />
          </Link>
          <Link to="/products" className="text-gray-600 mt-2">
            مشاهده همه
          </Link>
        </div>
      </div>
    </>
  );
}
