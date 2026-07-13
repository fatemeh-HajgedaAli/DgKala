// START
import { useState } from "react";
// icon
import { IoClose } from "react-icons/io5";
import { MdChevronLeft } from "react-icons/md";

export default function MobileFeaturesSlider({ features }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 py-4 bg-white" dir="rtl">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-4">
        <span className="font-bold text-gray-800 text-sm">مشخصات کالا</span>
        {/* Open-modal-btn */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs font-bold text-gray-500 flex items-center gap-1 active:opacity-70 transition"
        >
          مشاهده همه{" "}
          <span className="text-[10px]">
            <MdChevronLeft />
          </span>
        </button>
      </div>

      {/* Row-List-Features */}
      <ul className="w-full flex justify-start gap-3 overflow-x-auto px-4 pb-2 scrollbar-none snap-x snap-mandatory">
        {features?.map((feat, index) => (
          <li
            key={index}
            className="py-3 px-4 border border-gray-100 rounded-xl bg-gray-50/50 min-w-[160px] max-w-[160px] shrink-0 snap-center"
          >
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="text-[11px] text-gray-400 font-medium">
                {feat.name}
              </span>
              <span className="text-xs font-bold text-gray-800 w-full truncate">
                {feat.value}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* ─── بخش مودال (Bottom Sheet) ─── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 transition-opacity">
          {/* modalBackground */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* MainModal */}
          <div className="relative w-full max-h-[85vh] bg-white rounded-t-2xl flex flex-col animate-slide-up overflow-hidden shadow-2xl">
            {/* هدر مودال */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-100 shrink-0">
              <span className="font-bold text-gray-900 text-sm">
                مشخصات کامل کالا
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition text-xl active:scale-95"
              >
                <IoClose />
              </button>
            </div>

            {/* ModalList */}
            <div className="overflow-y-auto p-4 space-y-4 pb-8">
              {features?.map((feat, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1.5 pb-3 border-b border-gray-50 last:border-none"
                >
                  <span className="text-xs text-gray-400 font-medium">
                    {feat.name}
                  </span>
                  <span className="text-xs font-bold text-gray-800 leading-6">
                    {feat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// FINISH
