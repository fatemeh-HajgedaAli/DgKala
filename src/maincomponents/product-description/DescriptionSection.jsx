// معرفی کالا
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// start
export default function DescriptionSection({ description }) {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;
  // jsx
  return (
    <section className="bg-white rounded-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-bold text-gray-900">معرفی کالا</h2>
        <span className="block w-12 h-1 bg-red-500 rounded-full mt-2" />
      </div>

      {/* Content */}
      <div className="relative pt-4">
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[3000px]" : "max-h-48"
          }`}
        >
          <p className="text-sm leading-8 text-gray-700 text-justify font-normal">
            {description}
          </p>

          {/* Fade Gradient overlay when closed */}
          {!expanded && (
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-start mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-cyan-600 font-bold text-xs py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {expanded ? (
              <>
                <span>بستن </span>
                <BiChevronUp className="text-xl" />
              </>
            ) : (
              <>
                <span> بیشتر</span>
                <BiChevronDown className="text-xl" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
