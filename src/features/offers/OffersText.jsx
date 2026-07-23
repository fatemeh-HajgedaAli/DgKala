// features/offers/OffersText.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

// لوگوها
import Logo1 from "../../assets/logos/Amazings.svg";
import Logo2 from "../../assets/logos/offer-icon.svg";
import Logo3 from "../../assets/logos/shegeftaneh-sm.svg";

// ایمپورت تایمر اصلاح‌شده
import OfferTimer from "../../maincomponents/shared/OfferTimer";

export default function OffersText({ duration = 86400000 }) {
  return (
    <div
      className="
        absolute 
        z-20 
        pointer-events-auto 
        flex 
        flex-row 
        lg:flex-col
        items-center 
        justify-between 
        w-[100%]
        lg:w-auto
        h-auto 
        my-2
        mx-4
        lg:h-[85%] 
        lg:justify-evenly
      "
      dir="rtl"
    >
      {/* دسکتاپ: لوگوی اصلی شگفت‌انگیز */}
      <img
        src={Logo1}
        alt="AmazingLogo"
        className="hidden lg:block lg:w-24 xl:w-28"
      />

      {/* موبایل: لوگوهای کوچک چپ‌چین */}
      <div className="flex lg:hidden items-center gap-2 ">
        <img src={Logo2} alt="%Logo" className="w-12" />
        <img src={Logo3} alt="rowAmazing Logo" className="w-20" />
      </div>

      {/* بخش اختصاصی رندر تایمر شما با باکس سفید تمیز دیجی‌کالایی */}
      <div
        className="text-gray-950 gap-2 px-2.5 py-1.5 rounded-lg 
       flex items-center justify-center min-w-[90px]"
      >
        <OfferTimer duration={duration} variant="amazing" />
      </div>

      {/* دسکتاپ: تصویر جعبه شگفت‌انگیز */}
      <img
        src={Logo2}
        alt="AmazingBoxLogo"
        className="hidden lg:block lg:w-20 lg:h-20 object-contain"
      />

      {/* دکمه مشاهده همه */}
      <div className="flex items-center text-white">
        {/* موبایل */}
        <Link
          to="/amazing"
          className="text-xs font-bold ml-4  flex lg:hidden items-center
           gap-0.5 hover:opacity-90"
        >
          <span>مشاهده همه</span>
          <MdKeyboardArrowLeft className="text-lg" />
        </Link>

        {/* دسکتاپ */}
        <Link
          to="/amazing"
          className="hidden lg:flex items-center text-sm 
          font-bold gap-1 group border-b  
          border-transparent hover:border-white pb-0.5 transition-all"
        >
          <span>مشاهده همه</span>
          <MdKeyboardArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
