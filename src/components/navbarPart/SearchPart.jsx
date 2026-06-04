import React from "react";
import mainLogo from "../../assets/pictures/DigiLogos/logo dj.svg";
import { BsSearch, BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { GoMoveToBottom } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import NavbarmenuBoxes from "./NavbarmenuBoxes";

export default function SearchPart({ placeholder }) {
  return (
    <>
      {/* rightPart */}
      <div
        className="relative top-20 
      lg:shadow-sm/10 lg:h-25 lg:border-b-2 lg:border-slate-300  
      "
      >
        <div
          className="flex flex-row justify-between items-center 
      invisible 
       lg:visible "
        >
          <div className=" flex flex-row justify-start z-40">
            {/* Logo */}
            <img src={mainLogo} alt="DigiKalaLogo" className="w-40 mr-3 mt-1" />
            {/* SearchBox */}
            <div className="relative flex flex-row items-center">
              <div className="absolute right-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-slate-400 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder={placeholder}
                className=" bg-gray-100 text-slate-400 
            rounded-xl font-bold shadow-sm/10 w-120 h-10 px-15
              mt-2 mr-4 text-l"
              />
              {/* icon */}
            </div>
          </div>

          {/* leftPart */}
          <div className="flex flex-row gap-2 justify-end 
          mt-3 ml-5 lg: z-[999] text-alate-300">
            <BsBell className="mt-1 text-2xl" />
            <div
              className="flex flex-row border-slate-300 border-1 
          rounded-xl px-5 py-2 -mt-1 cursor-pointer shadow-sm/10"
            >
              <BsDoorOpen className="mt-1 pl-1 text-xl " />
              <Link className="pl-1">ورود</Link>
              <Link> | ثبت‌نام</Link>
            </div>
            <BsCart2 className="border-r-1 h-8 pr-3 text-4xl mt-0.5 border-slate-300" />
          </div>
        </div>
      </div>
      {/* phone search  Box */}
      <div className="relative bg-gray-100 h-55 -top-19 shadow-sm lg:invisible">
        <div
          className="absolute flex flex-row item-center 
        gap-4 right-1 z-999 top-5"
        >
          <NavbarmenuBoxes />
        </div>
        {/* searchInput */}
        <div className="relative flex item-center visible lg:invisible top-30">
          <input
            type="text"
            placeholder={placeholder}
            className=" bg-white text-slate-400 w-150 
            rounded-3xl font-bold border-slate-300 border-1
            px-25 py-2 mr-10 text-l"
          />
          {/* icon */}
          <BsSearch className="absolute text-slate-400 top-4 right-15 text-2xl  " />
          <BsBell
            className=" ml-2 border-1 bg-white border-slate-300 shadow-xl/10
           rounded-full p-5 text-6xl mr-5"
          />
        </div>
        {/* location */}
        <div
          className="flex gap-1 lg:invisible mt-32 mr-11 text-rose-800 
        text-sm items-center  "
        >
          <CiLocationOn />
          <span>انتخاب آدرس</span>
          {/* arrow-down */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 "
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
