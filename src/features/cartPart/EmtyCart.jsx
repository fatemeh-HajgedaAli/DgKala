import { Link } from "react-router-dom";
import handBasket from "../../assets/logos/hand-basket.svg";
import { PiStarThin } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";

export default function EmptyCart() {
  return (
    <>
      <div
        dir="rtl"
        className="min-h-[400px] flex items-start justify-center py-10"
      >
        <div className="w-full max-w-5xl flex gap-5">
          {/* Empty Cart */}
          <div className="flex-1 bg-white rounded-xl border border-slate-200 py-16 text-center">
            <img
              src={handBasket}
              alt="سبد خرید"
              className="w-28 h-28 mx-auto mb-6 opacity-90"
            />

            <h2 className="text-lg font-bold text-slate-800">
              سبد دیجی‌کالایی شما خالی است!{" "}
            </h2>
          </div>

          {/* Plus Box */}
          <div
            className="
            w-[380px]
            h-[110px]
            bg-gradient-to-l
            from-purple-100
            to-white
            rounded-xl
            border
            border-purple-100
            shadow-sm
            p-4
            flex
            flex-col
            justify-between
          "
          >
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 justify-between">
              <span className="flex flex-row">
                <PiStarThin className="text-purple-600" size={20} />
                هر ماه ۱۰ ارسال رایگان با دیجی‌کالا پلاس!{" "}
              </span>
              <button
                className="
              flex
              items-center
              gap-1
              text-purple-600
              text-xs
              font-bold
              self-start
            "
              >
                افزودن
                <MdArrowBackIos size={12} />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 leading-10">
              ارسال دیجی‌کالا | ۲ ارسال سوپرمارکت | ۴ ارسال ۴۵ دقیقه‌ای
            </p>
          </div>
        </div>
      </div>
      {/* recently-views */}
      <div className="flex w-full h-[200px] rounded-xl border-1 border-gray-200">
        <h2 className="p-4">بازدیدهای اخیر</h2>
      </div>
    </>
  );
}
