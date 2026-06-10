import React from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { AiOutlineGold } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { MdOpacity } from "react-icons/md";
import { hover, motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";
const menuItems = [
  {
    id: 1,
    icons: <CgMenu className=" text-slate-600  mt-1 " />,
    title: "دسته‌بندی کالاها",
    path: "/categories",
  },
  {
    id: 2,
    icons: <BiSolidOffer />,
    title: "شگفت انگیزها",
    path: "/categories",
  },
  {
    id: 3,
    icons: <BsFillBasket2Fill />,

    title: " سوپرمارکت",
    path: "/categories",
  },
  {
    id: 4,
    icons: <AiOutlineGold />,
    title: "طلا و نقره دیجیتال",
    path: "/categories",
  },
  {
    id: 5,
    icons: <FaFireFlameCurved />,
    title: "پرفروش ترین ها",
    path: "/categories",
  },
  {
    id: 6,

    title: "سوالی دارید؟",
    path: "/categories",
  },
  {
    id: 7,

    title: "در دیجی کالا بفروشید!",
    path: "/categories",
  },
];
const MotionLink = motion(Link);
// start
export default function NavbarMenu() {
  return (
    <>
      <div className=" hidden lg:flex ">
        {/* menu Items */}
        <ul
          className=" flex flex-row lg:gap-4 lg:mr-2 lg:text-slate-400 
          items-center "
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              className={`relative flex items-center gap-2 cursor-pointer
      ${item.id === 2 || item.id === 6 ? "border-r-2 border-gray-200 pr-2" : ""} 
    `}
            >
              <MotionLink
                whileHover="hover"
                initial="initial"
                to={item.path}
                className="relative flex items-center gap-2"
              >
                {item.icons}
                <span>{item.title}</span>
                {/* Red underLine */}
                <motion.div
                  className="absolute bottom-[-5px] left-0 h-[2px] bg-red-600"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </MotionLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
