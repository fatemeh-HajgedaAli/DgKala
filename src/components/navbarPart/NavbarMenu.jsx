import React from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineGold } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { MdOpacity } from "react-icons/md";
export default function NavbarMenu() {
  return (
    <>
      <div className="relative invisible lg:visible bottom-26">
        <div>
          {/* menu Items */}
          <ul
            className="relative flex flex-row gap-4 right-2 -top-16 text-slate-400 
          items-center "
          >
            <li className="flex text-slate-400 ml-2 gap-2">
              {" "}
              <CgMenu className=" text-slate-600 cursor-pointer  mt-1 " />
              <a href="#"> دسته‌بندی کالاها</a>
            </li>
            <li
              className=" flex items-center gap-2 curosr-pointer 
            border-r-1 pr-2 cursor-pointer "
            >
              {" "}
              <BiSolidOffer />
              شگفت انگیزها
            </li>
            <li className=" flex items-center gap-2 cursor-pointer">
              {" "}
              <BsFillBasket2Fill />
              سوپرمارکت
            </li>
            <li className=" flex items-center gap-2 cursor-pointer">
              <AiOutlineGold />
              طلا و نقره دیجیتال
            </li>
            <li className=" flex items-center gap-2 cursor-pointer ">
              <FaFireFlameCurved />
              پرفروش ترین ها
            </li>
            <li className=" flex items-center gap-2 border-r-1 pr-2 cursor-pointer">
              سوالی دارید؟
            </li>
            <li>در دیجی کالا بفروشید!</li>
          </ul>
        </div>

        {/* location */}
        <div className="relative items-start mt-2">
          <div
            className="absolute flex bottom-19 left-5 bg-orange-50 w-38 
          rounded-4xl justify-center border-orange-100 border-1
           items-center flex gap-1 lg:visible invisible text-orange-400 
                  items-center shadow-sm/10 "
          >
            <CiLocationOn />
            <span className="block text-s text-bold px-1 py-1">
              انتخاب آدرس
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
