import React from "react";
import { useState } from "react";
import { amazingData } from "./offersData";
import OfferItems from "./OfferItems";
import useOfferSlider from "./useOffersSlider";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { Link } from "react-router";

export default function OfferSlider({ sliderRef, handleScroll }) {
  const { index, next, prev } = useOfferSlider(amazingData.length);

  return (
    <>
      {amazingData.map((item) => (
        <OfferItems key={item.id} item={item} />
      ))}
      <div className="w-[200px] h-[300px] shrink-0 flex flex-col items-center justify-center bg-white rounded-l-xl cursor-pointer hover:shadow-md transition">
        <PiArrowCircleLeftThin className="text-blue-600 text-5xl font-light" />
        <Link to="/products" className="text-gray-600 mt-2">مشاهده همه</Link>
      </div>
    </>
  );
}
