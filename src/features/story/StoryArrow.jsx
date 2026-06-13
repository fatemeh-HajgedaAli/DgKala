// left/right Arrow
import { FaChevronLeft } from "react-icons/fa6";
export default function StoryArrow({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`absolute z-10 h-full w-[100px] bg-white ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      {/* rotate SVG  */}

      <FaChevronLeft
        className={`
          w-10 h-10 rounded-full border-1 text-2xl bg-white text-slate-300 
          -mt-10 p-3 hover:text-slate-500 
          ${isLeft ? "-mr-15 " : "mr-35 rotate-180"}
        `}
      />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className={`
          w-10 h-10 rounded-full border-2 border-slate-300 bg-white text-slate-500 font-light
          -mt-10
          ${isLeft ? "-mr-15 rotate-180" : "mr-35"}
        `}
      >
        <path
          fillRule="evenodd"
          d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg> */}
    </button>
  );
}
