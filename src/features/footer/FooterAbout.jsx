// about-Digi-Kala
import React, { useState } from "react";
import { digikalaAboutText } from "../../data/componentData/digikalaAbout";
import { HiOutlineChevronUp } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi2";
// start
export default function FooterAbout() {
  const [isExpanded, setIsExpanded] = useState(false);
  // jsx
  return (
    <div className="bg-white p-4 text-sm leading-7 text-right dir-rtl relative">
      {/* باکس حاوی متن با محدودیت ارتفاع در حالت بسته */}
      <div
        className={`relative overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[3000px]" : "max-h-24"
        }`}
      >
        {/* تیتر اصلی */}
        <h1 className="text-base font-bold text-gray-700 mb-2">
          {digikalaAboutText.title}
        </h1>

        {/* بخش‌های مختلف متن */}
        <div className="space-y-3">
          {digikalaAboutText.sections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <h2 className="text-sm font-semibold text-gray-700 mt-3 mb-1">
                  {section.title}
                </h2>
              )}
              <p className="text-justify text-gray-500 text-xs leading-6">
                {Array.isArray(section.content)
                  ? section.content.map((item, itemIdx) =>
                      typeof item === "string" ? (
                        item
                      ) : item.keyword ? (
                        <span
                          key={itemIdx}
                          className="text-blue-500 font-medium hover:underline cursor-pointer px-0.5"
                        >
                          {item.text}
                        </span>
                      ) : (
                        item.text
                      ),
                    )
                  : section.content}
              </p>
            </div>
          ))}
        </div>

        {/* لایه محو شونده (Gradient Overlay) - فقط وقتی متن بسته است نمایش داده می‌شود */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        )}
      </div>

      {/* دکمه مشاهده بیشتر / بستن */}
      <div className="mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-gray-400 font-medium
           hover:text-gray-600 transition"
        >
          <span>{isExpanded ? "بستن" : "مشاهده بیشتر"}</span>
          {isExpanded ? (
            <HiOutlineChevronUp className="w-4 h-4" />
          ) : (
            <HiOutlineChevronRight className="w-4 h-4 rotate-180" />
          )}
        </button>
      </div>
    </div>
  );
}
