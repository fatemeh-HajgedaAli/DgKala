// left/right Arrow
import { FaChevronLeft } from "react-icons/fa6";
export default function BrandsArrow({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        z-20
        w-10
        h-10
        rounded-full
        border-1
        border-gray-400
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        
       ${isLeft ? "left-8" : "right-10"}
      `}
    >
      <FaChevronLeft
        className={`text-slate-500 ${!isLeft ? "rotate-180" : ""}`}
      />
    </button>
  );
}
