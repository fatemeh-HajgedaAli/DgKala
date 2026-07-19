import { FiChevronDown } from "react-icons/fi";

export default function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-none">
      <button
        onClick={onClick}
        className="
          w-full
          px-6
          py-5
          flex
          items-center
          justify-between
          text-right
  
        "
      >
        <span className="text-base font-bold text-slate-700 leading-6">
          {item.question}
        </span>

        <FiChevronDown
          size={20}
          className={`
            text-slate-400
            transition-transform
            duration-300
            flex-shrink-0
            mr-4
            ${isOpen ? "rotate-180 text-red-500" : ""}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"}
        `}
      >
        <p className="px-6 text-sm leading-7 text-slate-500 text-justify">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
