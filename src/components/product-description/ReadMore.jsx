import React, { useState } from "react";
import { BiChevronLeft, BiChevronUp } from "react-icons/bi";

export default function ReadMore({ text }) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  return (
    <div className="relative w-full" dir="rtl">
      <p
        className={`
          text-gray-600
          text-sm
          leading-8
          text-justify
          transition-all
          duration-500
          ${expanded ? "max-h-none" : "max-h-28 overflow-hidden"}
        `}
      >
        {text}
      </p>

      {!expanded && (
        <div
          className="
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-white
          via-white/90
          to-transparent
          flex
          items-end
          justify-end
          "
        >
          <button
            onClick={() => setExpanded(true)}
            className="
            flex
            items-center
            gap-1
            text-cyan-600
            hover:text-cyan-700
            text-xs
            font-bold
            bg-white
            px-3
            py-1
            rounded-lg
            "
          >
            مشاهده بیشتر
            <BiChevronLeft className="text-lg" />
          </button>
        </div>
      )}

      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="
          flex
          items-center
          gap-1
          text-cyan-600
          hover:text-cyan-700
          text-xs
          font-bold
          mt-3
          mr-auto
          "
        >
          بستن
          <BiChevronUp className="text-lg" />
        </button>
      )}
    </div>
  );
}
