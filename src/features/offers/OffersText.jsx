import React from "react";
import Logo1 from "../../assets/logos/Amazings.svg";
import Logo2 from "../../assets/logos/offer-icon.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import OfferTimer from "./OfferTimer";
import { Link } from "react-router";

export default function OffersText() {
  return (
    <>
      <div className="absolute flex flex-col items-center gap-2">
        <img src={Logo1} alt="AmazingLogo" className="mr-10 mt-8" />
        <OfferTimer duration={10 * 24 * 60 * 60 * 1000} />
        <img src={Logo2} alt="AmazingLogo" className="mr-10 w-30" />

        <div className="flex items-center text-white -mt-2  mr-15">
          <Link to="/products" type="button" className="text-sm ">
            مشاهده همه
          </Link>
          <MdKeyboardArrowLeft />
        </div>
      </div>
    </>
  );
}
