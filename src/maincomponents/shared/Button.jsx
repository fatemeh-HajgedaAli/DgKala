// left/right Arrow
import { FaChevronLeft } from "react-icons/fa6";

export default function Button({
  direction = "left",
  onClick,
  className = "",
}) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        z-20
        w-10 h-10
        rounded-full
        bg-white
        border border-gray-300
        shadow-md
        flex items-center justify-center
        transition
        hover:bg-gray-50
        ${isLeft ? "left-3" : "right-3"}
        ${className}
      `}
    >
      {/* icon direction is REAL now */}
      {isLeft ? (
        <FaChevronLeft className="text-slate-500" />
      ) : (
        <FaChevronLeft className="text-slate-500 rotate-180" />
      )}
    </button>
  );
}
