import React from "react";
import mainLogo from "../../assets/pictures/DigiLogos/logo dj.svg";
import { BsSearch, BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavbarmenuBoxes from "./NavbarmenuBoxes";

export default function SearchPart({ placeholder }) {
  return (
    <>
      {/* rightPart */}
      <div className=" flex flex-row justify-between items-center invisible lg:visible">
        <div className=" flex flex-row justify-start ">
          {/* Logo */}
          <img src={mainLogo} alt="DigiKalaLogo" className="w-40 mr-3 mt-1" />
          {/* SearchBox */}
          <div className="flex ">
            <input
              type="text"
              placeholder={placeholder}
              className="relative bg-gray-100 text-slate-400 
            rounded-xl font-bold shadow-xl/10 
            px-15 py-2 mt-2 mr-4 text-l"
            />
            {/* icon */}
            <BsSearch className="absolute right-55 top-19 text-slate-400 " />
          </div>
        </div>

        {/* leftPart */}
        <div className="flex flex-row gap-2 justify-end mt-3 ml-5 text-alate-300">
          <BsBell className="mt-1 text-2xl" />
          <div
            className="flex flex-row border-slate-300 border-1
          rounded-xl px-5 py-2 -mt-1 cursor-pointer shadow-xl/10"
          >
            <BsDoorOpen className="mt-1 pl-1 text-xl " />
            <Link className="pl-1">ورود</Link>
            <Link> | ثبت‌نام</Link>
          </div>
          <BsCart2 className="border-r-1 h-8 pr-3 text-4xl mt-0.5 border-slate-300" />
        </div>
      </div>
      {/* phone search  Box */}
      <div className="relative flex flex-row bottom-12 item-center gap-4">
        <NavbarmenuBoxes />
      </div>
      <div>
        <div className="relative flex item-center visible lg:invisible -top-10">
          <input
            type="text"
            placeholder={placeholder}
            className=" bg-white text-slate-400 w-150 
            rounded-3xl font-bold border-slate-300 border-1
            px-25 py-2 mr-4 text-l"
          />
          {/* icon */}
          <BsSearch className="absolute text-slate-400 top-4 right-10 text-2xl  " />
          <BsBell className="mt-1 border-1 border-slate-300 shadow-xl/10 rounded-full p-5 text-6xl mr-5" />
        </div>
      </div>
    </>
  );
}
