// معرفی کالا
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// start
export default function DescriptionSection({ description }) {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;
  // jsx
  return (
    <section className="bg-white overflow-hidden">
      {/* Header */}

      <div className="px-7 pt-7 pb-5">
        <h2 className="text-xl font-black text-slate-900">معرفی کالا</h2>

        <span
          className="
    block
    w-16
    h-[3px]
    bg-red-500
    rounded-full
    mt-3
  "
        />

        <p className="text-sm text-slate-500 mt-3">بررسی کامل محصول</p>
      </div>

      {/* Content */}

      <div className="relative px-7 py-6">
        <div
          className={`
          relative
          overflow-hidden
          transition-all
          duration-500
          ${expanded ? "max-h-[3000px]" : "max-h-52"}
          `}
        >
          <p
            className="
            text-[15px]
            leading-9
            text-slate-700
            text-justify
            "
          >
            {description}
          </p>

          {!expanded && (
            <div
              className="
              absolute
              bottom-0
              left-0
              right-0
              h-28
              bg-gradient-to-t
              from-white
              via-white/90
              to-transparent
              "
            />
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="
            flex
            items-center
            gap-2
            text-red-500
            hover:text-red-600
            font-bold
            text-sm
            transition
            "
          >
            {expanded ? (
              <>
                بستن معرفی
                <BiChevronUp size={20} />
              </>
            ) : (
              <>
                مشاهده بیشتر
                <BiChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
