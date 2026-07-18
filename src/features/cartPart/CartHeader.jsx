// src/features/cartPart/CartHeader.jsx

import { toFarsiNumber } from "../../utils/number";
// start
export default function CartHeader({ count }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm text-slate-800">سبد خرید شما</span>
        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
          {toFarsiNumber(count)} کالا
        </span>
      </div>
      <div className="text-slate-400 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
  );
}
