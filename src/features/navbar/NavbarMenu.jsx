import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// data
import { menuItems } from "../../data/navbar.data";

const MotionLink = motion(Link);

export default function NavbarMenu() {
  return (
    <div className="hidden lg:flex ">
      <ul className="flex items-center gap-4 text-slate-500 ">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
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
                {Icon && <Icon className="text-lg" />}

                <span>{item.title}</span>

                <motion.div
                  className="absolute bottom-[-17.2px] left-0 h-[3px] bg-red-600"
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </MotionLink>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
