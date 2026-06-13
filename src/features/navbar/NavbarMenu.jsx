import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CgMenu } from "react-icons/cg";
import { AiOutlineGold } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

const menuItems = [
  {
    id: 1,
    icon: <CgMenu />,
    title: "دسته‌بندی کالاها",
    path: "/categories",
  },
  {
    id: 2,
    icon: <BiSolidOffer />,
    title: "شگفت انگیزها",
    path: "/categories",
    divider: true,
  },
  {
    id: 3,
    icon: <BsFillBasket2Fill />,
    title: "سوپرمارکت",
    path: "/categories",
  },
  {
    id: 4,
    icon: <AiOutlineGold />,
    title: "طلا و نقره دیجیتال",
    path: "/categories",
  },
  {
    id: 5,
    icon: <FaFireFlameCurved />,
    title: "پرفروش ترین ها",
    path: "/categories",
  },
  {
    id: 6,
    title: "سوالی دارید؟",
    path: "/categories",
    divider: true,
  },
  {
    id: 7,
    title: "در دیجی کالا بفروشید!",
    path: "/categories",
  },
];

const MotionLink = motion(Link);

export default function NavbarMenu() {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-4 text-slate-500">
        {menuItems.map((item) => (
          <motion.li
            key={item.id}
            className={`relative flex items-center gap-2 cursor-pointer ${
              item.divider ? "border-r-2 border-gray-200 pr-3" : ""
            }`}
          >
            <MotionLink
              to={item.path}
              className="relative flex items-center gap-2"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.title}</span>

              {/* underline */}
              <motion.div
                className="absolute bottom-[-6px] left-0 h-[2px] bg-red-600"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.25 }}
              />
            </MotionLink>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
