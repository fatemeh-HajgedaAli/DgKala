// offer-text/logo/moreOption
import React from "react";
import Logo1 from "../../assets/logos/Amazings.svg";
import Logo2 from "../../assets/logos/offer-icon.svg";
import Logo3 from "../../assets/logos/shegeftaneh-sm.svg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import OfferTimer from "./OfferTimer";
import { Link } from "react-router";
// start
export default function OffersText() {
  // jsx
  return (
    <>
      <div
        className="absolute flex flex-row lg:flex-col
       items-center lg:gap-2 my-4 mx-4 justify-between"
      >
        <img
          src={Logo1}
          alt="AmazingLogo"
          className="hidden lg:flex lg:mr-10 mt-8 "
        />
        {/* sm-Logos */}

        <img
          src={Logo2}
          alt="%Logo"
          className="flex lg:hidden mr-0 w-10 -mt-2"
        />
        <img
          src={Logo3}
          alt="rowAmazing Logo"
          className="mr-1 w-30 lg:hidden"
        />
        {/* timer */}
        <OfferTimer duration={10 * 24 * 60 * 60 * 1000} />
        {/* amaizingLogo */}
        <img
          src={Logo2}
          alt="AmazingLogo"
          className="hidden lg:flex mr-5 w-20 "
        />
        {/* more option */}
        <div
          className="flex  items-center text-white 
         lg:-mt-2  lg:mr-10"
        >
          <Link
            to="/amazing"
            type="button"
            className="text-sm ml-5  hidden lg:flex "
          >
            مشاهده همه
          </Link>
          <Link
            to="/amazing"
            type="button"
            className="text-sm flex lg:hidden mr-35 "
          >
            همه
          </Link>
          {/* icon */}
          <MdKeyboardArrowLeft />
        </div>
      </div>
    </>
  );
}
// finish
