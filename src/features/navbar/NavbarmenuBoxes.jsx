import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavbarExtras from "./MobileNavbarExtras";
import { CiLocationOn } from "react-icons/ci";
import { boxItems } from "../../data/componentData/navbar.data";

import { useAddress } from "../../context/AddressContext";
import AddressModal from "../address/AddressModal";
// start
export default function NavbarmenuBoxes() {
  const { address, setAddress } = useAddress();
  const [open, setOpen] = useState(false);
  // hide in amazing part
  const location = useLocation();

  if (
    location.pathname === "/amazing" ||
    location.pathname.startsWith("/amazing/") ||
    location.pathname.startsWith("/product/")
  ) {
    return null;
  }

  // jsx
  return (
    <>
      <div className="w-full bg-gray-100 lg:hidden">
        {/* Top Extras */}
        <MobileNavbarExtras />

        {/* Boxes */}
        <div className="flex overflow-x-auto gap-2 px-3 py-4 hide-scrollbar">
          {boxItems.map((item) => {
            const isExternal = item.path?.startsWith("http");

            const content = (
              <div
                className={`
                  flex-shrink-0
                  w-[72px] h-[72px]
                  sm:w-[80px] sm:h-[80px]
                  md:w-[88px] md:h-[88px]
                  rounded-2xl
                  flex flex-col items-center justify-center
                  ${
                    item.id === 2
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-400"
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />

                <span className="text-[10px] sm:text-xs mt-1 text-center">
                  {item.title}
                </span>
              </div>
            );

            return isExternal ? (
              <a
                key={item.id}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={item.id} to={item.path}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Location */}
        <div
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 px-4 pb-3 text-red-700 cursor-pointer"
        >
          <CiLocationOn className="text-lg" />

          <span className="text-sm font-medium">
            {address ? address.address : "انتخاب آدرس"}
          </span>
        </div>
      </div>

      {/* Modal */}
      <AddressModal
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(data) => {
          setAddress(data);
          setOpen(false);
        }}
      />
    </>
  );
}
