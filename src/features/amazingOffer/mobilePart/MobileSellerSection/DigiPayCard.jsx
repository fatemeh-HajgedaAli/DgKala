import { FiChevronLeft } from "react-icons/fi";
import { toFarsiNumber } from "../../../../utils/number";

export default function DigiPayCard() {
  return (
    <div className="flex justify-start items-start p-4 gap-3 border border-gray-200 rounded-xl w-[280px] shrink-0 bg-white snap-center">
      <div className="w-9 h-9 min-w-9 rounded-full p-2 bg-purple-50 flex items-center justify-center text-purple-600">
        💳
      </div>

      <div className="flex flex-col items-start justify-between h-full gap-3">
        <div className="flex flex-col items-start gap-1">
          <div className="text-xs font-bold text-gray-800">
            خرید اقساطی با دیجی پی
          </div>

          <div className="text-[11px] text-gray-400 leading-5">
            ۱۲ ماهه و با ماهی{" "}
            <span className="font-bold text-gray-600">
              {toFarsiNumber("۴,۷۰۳,۸۰۰")}
            </span>{" "}
            تومان،{" "}
            <span className="font-bold text-gray-600">
              {toFarsiNumber("۵۰,۰۰۰,۰۰۰")}
            </span>{" "}
            تومان اعتبار پیشنهادی
          </div>
        </div>

        <button className="text-[11px] font-bold text-purple-600 pr-2 pl-1 py-1 rounded-lg border border-purple-200 flex items-center gap-0.5">
          دریافت وام

          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
}