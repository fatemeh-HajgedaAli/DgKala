// left/right Arrow
import { FaChevronLeft } from "react-icons/fa6";
export default function OfferArrow({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={` z-10 h-full w-[100px]  bg-white ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      {/* rotate SVG  */}

      <FaChevronLeft
        className={`
          w-10 h-10 rounded-full border-1 text-2xl bg-white text-slate-300 
          -mt-10 p-3 hover:text-slate-500 
          ${isLeft ? "mr-20 " : "mr-3  rotate-180"}
        `}
      />
    </button>
  );
}
