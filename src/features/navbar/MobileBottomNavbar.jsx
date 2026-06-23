// BOOTOM-MOBILE-NAVBAR
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { bottemData } from "../../data/navbar.data";

export default function MobileBottomNavbar() {
  const location = useLocation();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 
    lg:hidden bg-white border-t border-slate-200 z-50"
    >
      <ul className="flex justify-around items-center py-1">
        {bottemData.map((item) => {
          const Icon = item.icon;
          const ActiveIcon = item.activeIcon;

          const isActive = location.pathname === item.path;

          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="flex flex-col items-center justify-center gap-1 py-2 px-3 relative"
              >
                {/* ICON */}
                {isActive && ActiveIcon ? (
                  <ActiveIcon className="text-2xl text-red-500" />
                ) : (
                  <Icon className="text-2xl text-gray-400" />
                )}

                {/* TEXT */}
                <span
                  className={`text-xs ${
                    isActive ? "text-red-500 font-medium" : "text-gray-400"
                  }`}
                >
                  {item.title}
                </span>

                {/* ACTIVE DOT */}
                {isActive && (
                  <span className="absolute -bottom-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
