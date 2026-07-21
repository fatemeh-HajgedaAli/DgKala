// icons
import { IoSearchOutline } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";

// image-pattern
import bestSellingPattern from "../../assets/logos/deal-pattern-amazing.svg";

// start
export default function FAQSearch({ onSearch }) {
  return (
  <div>
      {/* محتوای اصلی */}
      <div className="relative mt-16 z-40 flex flex-col items-center w-full">
        <div className="text-cyan-500 text-3xl mb-4 bg-white rounded-xl p-2.5 shadow-sm border border-slate-100">
          <CiSquareQuestion />
        </div>

        <h2 className="text-base font-bold text-gray-800 mb-2">
          موضوع پرسش شما چیست؟
        </h2>

        <p className="text-xs text-gray-400 mb-6 font-medium">
          موضوع موردنظرتان را جستجو کنید یا از دسته‌بندی زیر انتخاب کنید
        </p>

        <div className="relative w-full max-w-xl px-4">
          <input
            type="text"
            placeholder="جستجوی موضوع"
            onChange={(e) => onSearch(e.target.value)}
            className="
              w-full
              border
              border-gray-200
              rounded-lg
              py-3
              pr-11
              pl-4
              text-xs
              text-gray-700
              outline-none
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/10
              bg-white
              shadow-sm
              transition-all
              text-right
            "
            dir="rtl"
          />
          <IoSearchOutline className="absolute right-8 top-3.5 text-gray-400 text-xl" />
        </div>
      </div>
    </div>
  );
}
