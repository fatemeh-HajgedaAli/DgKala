import { PiStarFourBold } from "react-icons/pi";
import { FiChevronLeft } from "react-icons/fi";

export default function PlusCard() {
  return (
    <div className="flex justify-start items-start p-4 gap-3 border border-gray-200 rounded-xl w-[280px] shrink-0 bg-white snap-center">
      <div className="w-9 h-9 min-w-9 rounded-full p-2 bg-purple-50 flex items-center justify-center text-purple-500">
        <PiStarFourBold size={16} />
      </div>

      <div className="flex flex-col items-start justify-between h-full gap-3">
        <div className="flex flex-col items-start gap-1">
          <div className="text-xs font-bold text-gray-800">
            ارسال رایگان سفارش‌ها
          </div>

          <div className="text-[11px] text-gray-400 leading-4">
            ۴ ارسال رایگان دیجی‌کالا
            <br />
            ۲ ارسال سوپرمارکت و پشتیبانی اختصاصی
          </div>
        </div>

        <button className="text-[11px] font-bold text-purple-600 pr-2 pl-1 py-1 rounded-lg border border-purple-200 flex items-center gap-0.5">
          خرید اشتراک پلاس

          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
}