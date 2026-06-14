import React from "react";
import { amazingData } from "./offersData";
import OfferItems from "./OfferItems";
import useOfferSlider from "./useOffersSlider";

export default function OfferSlider({}) {
  const { index, next, prev } = useOfferSlider(amazingData.length);
  return (
    <>
      <div className=" flex flex-row gap-3 mt-2 mr-20">
        {amazingData.map((item) => (
          <OfferItems key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
