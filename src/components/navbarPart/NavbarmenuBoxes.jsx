import { image, picture, title } from "framer-motion/client";
import React, { useState } from "react";
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
        className="relative flex flex-row gap-2 justify-items-center 
        text-center mr-11 mt-4
      lg:invisible cursor-pointer"
      >
        {boxItems.map((item) => (
          <div
            key={item.id}
            className="w-20 h-18 text-center justify-items-center
            border-slate-300  bg-white 
            border-1 rounded-lg nth-2:bg-red-600 nth-2:text-white"
          >
            <img src={item.image} alt={item.title} className="flex w-10  " />
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
