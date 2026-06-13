import React from "react";

export default function MobileNavbarExtras() {
  return (
    <div className="lg:hidden px-4 pb-3">
      {/* search */}
      <div className="relative top-2">
        <input
          type="text"
          className="w-full h-[45px] bg-white 
          rounded-full border border-slate-300 outline-none pr-3"
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 
        right-4 text-slate-400 text-sm"
        >
          جستجو در <span className="text-red-600 font-bold">دیجی‌کالا</span>
        </div>
      </div>
    </div>
  );
}
