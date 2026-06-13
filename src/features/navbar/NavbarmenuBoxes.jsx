// datas
import MobileNavbarExtras from "./MobileNavbarExtras";
import { CiLocationOn } from "react-icons/ci";
import { boxItems } from "./navbar.data";

export default function NavbarmenuBoxes() {
  return (
    <>
      <div className="w-full bg-gray-100 lg:hidden">
        <MobileNavbarExtras />
        <div
          className="flex overflow-x-auto 
        px-2 gap-2 hide-scrollbar"
        >
          {boxItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[90px] h-[80px]
             bg-white rounded-xl flex flex-col
              items-center justify-center text-gray-400  
              mt-4 nth-2:bg-red-600 nth-2:text-white"
            >
              <img src={item.image} className="w-8 h-8" alt={item.title} />
              <span className="text-xs mt-1 ">{item.title}</span>
            </div>
          ))}
        </div>
        {/* location */}
        <div className="flex items-center gap-1 mt-2 text-red-700">
          <CiLocationOn />
          <span className="text-sm">انتخاب آدرس</span>
        </div>
      </div>
    </>
  );
}
