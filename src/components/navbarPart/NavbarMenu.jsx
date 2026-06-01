import React from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineGold } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
export default function NavbarMenu() {
  return (
    <>
      <div className="relative invisible lg:visible bottom-26">
        <div className="flex flex-row gap-2 items-center mt-5 mr-3 ">
          <CgMenu className=" text-slate-600 cursor-pointer" />
          <h2 className=" text-slate-400">دسته‌بندی کالاها</h2>
        </div>

        <div>
          {/* menu Items */}
          <ul className="flex flex-row gap-4 mr-40 -mt-6 text-slate-400 ">
            <li className=" flex items-center gap-2 curosr-pointer border-r-1 pr-2 cursor-pointer ">
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
      </div>
    </>
  );
}
