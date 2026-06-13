import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bottemData } from "./navbar.data";

const MotionLink = motion.create(Link);

export default function MobileBottomNavbar() {
  // active Icons
  const [activeId, setActiveId] = useState(null);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t
     border-slate-300 shadow-md z-50"
    >
      <ul className="flex w-full justify-around text-slate-400">
        {bottemData.map((item) => {
          // icons feature
          const Icon = item.icon;
          const ActiveIcon = item.activeIcon;
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <MotionLink
                to={item.path}
                onClick={() => setActiveId(item.id)}
                className="relative flex flex-col items-center gap-1 py-2 px-4 overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* backgroundHover */}
                <motion.div
                  className="absolute inset-0 -z-10
             bg-gradient-to-r
             from-transparent
             bg-slate-100
             to-transparent"
                  variants={{
                    rest: {
                      scale: 0,
                      opacity: 0,
                    },
                    hover: {
                      scale: [0, 1, 1],
                      opacity: [0, 1, 0],
                    },
                  }}
                  transition={{ duration: 0.6, times: [0, 0.5, 1.5] }}
                />
                {/* IconActive */}
                {isActive && ActiveIcon ? (
                  <ActiveIcon className="text-2xl text-slate-900" />
                ) : (
                  <Icon className="text-2xl text-slate-400" />
                )}
                <span className="text-xs">{item.title}</span>
              </MotionLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
