import { FiChevronDown } from "react-icons/fi";

export default function FAQItem({ item, isOpen, onClick }) {
  return (
    <div
      className="
      mx-4
        border-b
        border-slate-300
        last:border-none
      "
    >
      <button
        onClick={onClick}
        className="
          w-full
          px-7
          py-5
          flex
          items-center
          justify-between
          text-right
        "
      >
        <span
          className="
            text-lg
            font-bold
            text-slate-600
          "
        >
          {item.question}
        </span>

        <FiChevronDown
          size={20}
          className={`
            text-slate-500
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}
        `}
      >
        <p
          className="
            px-7
            text-lg
            leading-8
            text-red-700
          "
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}
