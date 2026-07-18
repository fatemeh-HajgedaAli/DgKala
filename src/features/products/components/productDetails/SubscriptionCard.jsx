// free-center-deleveiry
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi2";
import truck from "../../../../assets/logos/free-delivery-car.svg";

export default function SubscriptionCard() {
  return (
    <div
      className="
      w-full flex justify-start items-start 
      py-3 px-4 gap-3 mt-2 mr-4
      border border-gray-200 
      rounded-md 
      min-w-[245px]
      bg-white
      relative left-3.5
      overflow-hidden
      "
      dir="rtl"
    >
      {/* Plus Icon */}
      <div
        className="
        w-9 h-9 min-w-9 min-h-9
        rounded-full
        p-2  
        flex items-center justify-center
        "
      >
        <HiOutlineCube size={20} className="text-purple-600 mb-4" />
      </div>

      {/* Content */}
     
      <div
        className="
  flex flex-col
  items-start
  gap-2
  w-full
  relative left-3.5
  "
      >
        {/* Title */}
        <div
          className="
    text-x
    font-meduim
    text-fuchsia-700 px-2
    "
        >
          ارسال {""}
          <span className="font-bold text-xl">رایگان {""}</span>سفارش‌ها برای
          اعضای پلاس
        </div>

        {/* Benefits */}
        <div className="relative left-3.5 pr-3">
          {/* vertical line */}
          <div
            className="
      absolute
      right-0
      top-0
      bottom-0
      border-r-2
      border-gray-200
      "
          />

          <ul
            className="
      text-sm
      font-light
      text-gray-400
      leading-6
      space-y-1
      "
          >
            <li className="flex items-center gap-2 relative left-3.5 ">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 z-10" />۴
              ارسال رایگان دیجی‌کالا
            </li>

            <li className="flex items-center gap-2 relative left-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 z-10" />۲
              ارسال سوپرمارکت
            </li>

            <li className="flex items-center gap-2 relative left-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 z-10" />۴
              ارسال رایگان ۴۵ دقیقه‌ای
            </li>

            <li className="flex items-center gap-2 relative left-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 z-10" />
              پشتیبانی اختصاصی
            </li>

            <li className="flex items-center gap-2 relative left-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 z-10" />
              ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div
          className="
          flex
          items-center
          justify-between
          w-full
          mt-1
        "
        >
          <button
            onClick={() => console.log("خرید اشتراک پلاس")}
            className="
            text-xs
            font-bold
            text-purple-600
            px-2
            py-1
            rounded-xl
            border
            border-purple-500
            flex
            items-center
            gap-1
            hover:bg-purple-50
            transition
            "
          >
            خرید اشتراک پلاس
            <HiOutlineChevronLeft size={16} />
          </button>

          {/* Truck */}
          <img
            src={truck}
            alt="plus delivery"
            className="
            w-16
            h-12
            object-contain
            absolute
            left-2
            bottom-1
            opacity-90
            "
          />
        </div>
      </div>
    </div>
  );
}
