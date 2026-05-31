import React from "react";
import mainLogo from "../assets/pictures/DigiLogos/logo dj.svg";
import { BsSearch, BsBell, BsCart } from "react-icons/bs";

export default function SearchPart({ placeholder }) {
  return (
    <>
      <div className=" flex flex-row justify-start">
        {/* Logo */}
        <img src={mainLogo} alt="DigiKalaLogo" className="w-40 mr-3" />
        {/* SearchBox */}

        <div className="flex ">
          <input
            type="text"
            placeholder={placeholder}
            className="relative bg-gray-100 text-slate-400 
            rounded-xl font-bold
            px-15 py-2 mt-2 mr-4 text-l"
          />
          {/* icon */}
          <BsSearch className="absolute right-55 top-19 text-slate-400 " />
          <div></div>
        </div>
      </div>

      {/* leftPart */}
      <div className="flex flex-row gap-4 justify-end">
        <BsBell />
        <div
          className="flex flex-row border-slate-300 border-2
          md:
"
        >
          <button className="">ورود</button>
          <button className=""> | ثبت‌نام</button>
        </div>
        <BsCart className="border-r" />
      </div>
    </>
  );
}
