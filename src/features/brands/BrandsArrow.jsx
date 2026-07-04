import { FaChevronLeft } from "react-icons/fa6";

export default function BrandsArrow({ direction = "left", onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        w-10 h-10
        rounded-full
        bg-white border border-gray-300
        shadow
        flex items-center justify-center
        ${isLeft ? "left-2" : "right-2"}
      `}
    >
      <FaChevronLeft
        className={!isLeft ? "rotate-180 text-gray-600" : "text-gray-600"}
      />
    </button>
  );
}
