import React from "react";
import Logo1 from "../../assets/logos/Amazings.svg";
import Logo2 from "../../assets/logos/offer-icon.svg";
import Logo3 from "../../assets/logos/shegeftaneh-sm.svg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import OfferTimer from "./OfferTimer";
import { Link } from "react-router";

export default function OffersText() {
  return (
    <>
      <div className="absolute flex flex-row lg:flex-col items-center lg:gap-2 mr-5 mt-5">
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
        <img src={Logo3} alt="rowAmazing Logo" className="mr-1 w-30" />

        <OfferTimer  duration={10 * 24 * 60 * 60 * 1000} />
        {/* amaizingLogo */}
        <img
          src={Logo2}
          alt="AmazingLogo"
          className="hidden lg:flex mr-10 w-30"
        />
        {/* more option */}
        <div className="flex items-center text-white  lg:-mt-2  lg:mr-15">
          <Link
            to="/products"
            type="button"
            className="text-sm hidden lg:flex "
          >
            مشاهده همه
          </Link>
          <Link
            to="/products"
            type="button"
            className="text-sm flex lg:hidden mr-10 "
          >
            همه
          </Link>
          <MdKeyboardArrowLeft />
        </div>
      </div>
    </>
  );
}
