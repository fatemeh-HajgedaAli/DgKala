import { useState } from "react";
import { toFarsiNumber } from "../../../utils/number";

const SORT_OPTIONS = [
  { id: "newest", label: "جدیدترین" },
  { id: "most_helpful", label: "مفیدترین" },
];

export default function ReviewSort({ count = 0, onSortChange }) {
  const [activeSort, setActiveSort] = useState("newest");

  const handleSortClick = (sortId) => {
    setActiveSort(sortId);
    if (onSortChange) {
      onSortChange(sortId);
    }
  };

  return (
    <div
      dir="rtl"
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 border-b border-gray-100 bg-white"
    >
      {/* گزینه های مرتب سازی */}
      <div className="flex items-center gap-4 text-xs sm:text-sm">
        <span className="font-bold text-gray-800 shrink-0">مرتب‌سازی:</span>

        <div className="flex items-center gap-4">
          {SORT_OPTIONS.map((option) => {
            const isActive = activeSort === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSortClick(option.id)}
                className={`font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#ef4056] font-bold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* تعداد دیدگاه‌ها */}
      <div className="text-xs text-gray-500 font-medium">
        <span className="font-bold text-gray-800">
          {toFarsiNumber ? toFarsiNumber(count) : count}
        </span>{" "}
        دیدگاه ثبت شده
      </div>
    </div>
  );
}
