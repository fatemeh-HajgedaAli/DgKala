// mobile - boxes - navbar
import MobileNavbarExtras from "./MobileNavbarExtras";
import { CiLocationOn } from "react-icons/ci";
import { boxItems } from "../../data/navbar.data";

export default function NavbarmenuBoxes() {
  return (
    <div className="w-full bg-gray-100 lg:hidden">
      {/* Top Extras */}
      <MobileNavbarExtras />

      {/* Boxes */}
      <div className="flex overflow-x-auto gap-2 px-3 py-4 hide-scrollbar">
        {boxItems.map((item) => (
          <div
            key={item.id}
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
              className="
                w-7 h-7
                sm:w-8 sm:h-8
                object-contain
              "
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                mt-1
                text-center
                leading-4
              "
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 px-4 pb-3 text-red-700">
        <CiLocationOn className="text-lg" />

        <span className="text-sm font-medium">انتخاب آدرس</span>
      </div>
    </div>
  );
}
