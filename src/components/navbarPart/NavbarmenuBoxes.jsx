import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import pic1 from "../../assets/pictures/boxMenu/services.png";
import pic2 from "../../assets/pictures/boxMenu/DigiKala.png";
import pic3 from "../../assets/pictures/boxMenu//Gold.png";
import pic4 from "../../assets/pictures/boxMenu/style.png";
import pic5 from "../../assets/pictures/boxMenu/market.png";
import pic6 from "../../assets/pictures/boxMenu/cart.png";
const boxItems = [
  { id: 1, title: "سرویس ها", image: pic1 },
  { id: 2, title: "دیجی کالا", image: pic2 },
  { id: 3, title: "طلاونقره", image: pic3 },
  { id: 4, title: "استایل", image: pic4 },
  { id: 5, title: "سوپرمارکت", image: pic5 },
  { id: 6, title: "اعتبارخرید", image: pic6 },
];
export default function NavbarmenuBoxes({ title, image }) {
  return (
    <>
      {/* topNavbar */}
      <div
        className=" flex flex-col 
      lg:hidden  bg-gray-100  overflow-hidden "
      >
        <div
          className="flex flex-nowarp
          h-[100px]
        w-full
        gap-2
        overflow-x-auto
       hide-scrollbar
        px-2
    "
        >
          {boxItems.map((item) => (
            <div
              key={item.id}
              className="
                flex-shrink-0
                w-[90px]
                h-[70px]
                bg-white
                font-bold
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                mt-7 
                nth-2:bg-red-600 nth-2:text-white"
            >
              <img src={item.image} className="w-8 h-8" />
              <span className="text-xs mt-1">{item.title}</span>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="relative lg:hidden p-4 ">
          <input
            type="text"
            className="inline w-full h-[45px] bg-white rounded-full border-1 
            border-slate-300 text-slate-600 outline-none mt-2 pr-3"
          />
          <div className="absolute top-9 pr-5 ">
            <span className="text-slate-400 font-[500]">جستجو در </span>
            <span className="text-red-600 font-[700]">دیجی‌کالا</span>
          </div>
        </div>
        {/* LOCATION */}
        <div className="flex flex-row font-[400] text-red-800  items-center  mb-1 mr-4">
          <CiLocationOn />
          <span className="text-sm">انتخاب آدرس</span>
        </div>
      </div>
    </>
  );
}
