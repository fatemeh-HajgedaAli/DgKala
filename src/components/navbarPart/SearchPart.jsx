import React from "react";
import mainLogo from "../../assets/pictures/DigiLogos/logo dj.svg";
import { BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import NavbarmenuBoxes from "./NavbarmenuBoxes";
import NavbarMenu from "./NavbarMenu";

export default function SearchPart({ placeholder }) {
  return (
    <header className="w-full mt-0 lg:h-[120px] lg:mt-10 border-b border-slate-200 shadow-sm bg-white">
      {/* TOP SECTION */}
      <div className="relative">
        {/* menu boxes */}
        <NavbarmenuBoxes />

        {/* MAIN BAR */}
        <div className="hidden lg:flex items-center justify-between h-full pt-6 ">
          {/* LEFT SIDE: logo + search */}
          <div className="flex items-center gap-6">
            {/* LOGO */}
            <img src={mainLogo} alt="logo" className="w-[140px]" />

            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder={placeholder}
                className="w-[450px] h-[50px] bg-gray-100 rounded-xl px-10 text-sm text-slate-600 outline-none"
              />

              {/* search icon */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: actions */}
          <div className="flex items-center gap-2 ml-2">
            {/* notification */}
            <BsBell className="text-2xl text-slate-400 cursor-pointer" />

            {/* login */}
            <div className="flex items-center gap-2 border border-slate-300 rounded-xl px-3 py-2 cursor-pointer">
              <BsDoorOpen className="text-lg" />
              <Link className="text-sm">ورود</Link>
              <span className="text-sm text-slate-400">|</span>
              <Link className="text-sm">ثبت‌نام</Link>
            </div>

            {/* cart */}
            <BsCart2 className="text-3xl border-r-2 pr-1 text-slate-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* MENU SECTION */}
      <div className="hidden lg:flex items-center justify-between px-8 py-3">
        <NavbarMenu />

        {/* LOCATION */}
        <div
          className="flex items-center gap-1 -mt-2
        text-orange-600 border border-orange-400 
        rounded-full px-4 py-1.5 bg-orange-100"
        >
          <CiLocationOn />
          <span className="text-sm">انتخاب آدرس</span>
        </div>
      </div>
    </header>
  );
}
