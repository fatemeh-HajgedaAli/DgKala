import React from "react";
import Logo from "../../../../assets/logos/offer-text.svg";
import Basket from "../../../../assets/images/basket/fresh (1).webp";
import FreshPattern from "../../../../assets/images/basket/bg-freshPattern.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import SupermarketItems from "./SupermarketItems";
export default function AmazingSupermarket() {
  return (
    <>
      <div
        className="hidden lg:flex bg-gray-200 gap-5 rounded-xl px-10 py-10 mx-15 items-center "
        style={{
          backgroundImage: `url(${FreshPattern})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={Basket} alt="offerText" className="w-[50px]" />

        <img src={Logo} alt="offerText" className="w-[200px]" />
        <span  className="flex gap-2 items-center justify-center 
        text-sm text-white rounded-full w-[150px] h-[30px] bg-green-600 font-bold ml-30">تا ۵۰٪ تخفیف</span>
        <SupermarketItems className="" />
        <span
          className="flex gap-2 items-center justify-center 
        text-sm bg-white rounded-full w-[150px] h-[50px] text-green-600 font-bold"
        >
          بیش از ۶۰ کالا
          <FaArrowLeftLong />
        </span>
      </div>
    </>
  );
}
