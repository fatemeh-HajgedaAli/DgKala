import React, { useState } from "react";
import { BiChevronLeft, BiChevronUp } from "react-icons/bi";

export default function ProductDescription({ details }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!details || !details.description) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4" dir="rtl">
      {/* ستون سمت راست: توضیحات معرفی */}
      <div className="lg:col-span-3 flex flex-col items-start text-right">
        {/* تیتر معرفی با خط قرمز کوچک زیر آن */}
        <div className="relative pb-2 mb-4 inline-block">
          <h2 className="font-bold text-lg text-gray-800">معرفی</h2>
          <span className="absolute bottom-0 right-0 w-full h-[3px] bg-red-500 rounded-full"></span>
        </div>

        {/* باکس متن همراه با افکت فید (محو شدن) دیجی‌کالا در حالت بسته */}
        <div className="relative w-full">
          <p
            className={`text-gray-700 text-sm leading-8 text-justify transition-all duration-300 ${
              !isExpanded ? "max-h-24 overflow-hidden" : "max-h-none"
            }`}
          >
            {details.description}
          </p>

          {/* افکت گرادینت سفید و دکمه بیشتر (دقیقاً کپی دیجی‌کالا) */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-end">
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-1 text-cyan-500 hover:text-cyan-600 text-xs font-bold bg-white pr-2 pt-1"
              >
                بیشتر
                <BiChevronLeft className="text-xl" />
              </button>
            </div>
          )}
        </div>

        {/* دکمه بستن (اگر متن باز شد، دکمه به صورت محو یا ساده در پایان قرار می‌گیرد) */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-1 text-cyan-500 hover:text-cyan-600 text-xs font-bold mt-4 mr-auto"
          >
            بستن
            <BiChevronUp className="text-xl" />
          </button>
        )}
      </div>

      {/* ستون سمت چپ: فضای خالی برای کارت سایدبار پیشنهاد شگفت‌انگیز */}
      <div className="hidden lg:block lg:col-span-1">
        {/* باکس شگفت‌انگیز سمت چپ اسکرین‌شات شما اینجا رندر می‌شود */}
      </div>
    </div>
  );
}
