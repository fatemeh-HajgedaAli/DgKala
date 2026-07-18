//sildeBar
// icons
import { BsStars } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

// START
export default function MobileProductHeader({ product }) {
  return (
    <div className="w-full flex flex-col items-start my-3 px-4" dir="rtl">
      {/* بخش آدرس‌دهی (Breadcrumb) و دکمه‌های اشتراک‌گذاری */}
      <div className="flex justify-between items-center w-full pb-3 border-b border-gray-100">
        <div className="flex items-center gap-1 text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
          <a
            href="#"
            className="underline underline-offset-4 font-medium text-gray-500"
          >
            {product.brand}
          </a>
          <span className="text-gray-300">/</span>
          <a
            href="#"
            className="underline underline-offset-4 font-medium text-gray-500"
          >
            {product.category}
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <button className="p-1 rotate-180">
            <IoShareSocialOutline />
          </button>
          <button className="p-1">🤍</button>
        </div>
      </div>

      {/* عنوان اصلی و انگلیسی محصول */}
      <div className="w-full mt-3">
        <h1 className="text-base font-bold text-gray-800 leading-7 line-clamp-2">
          {product.title}
        </h1>
        <h2 className="mt-1 text-xs text-gray-400 font-bold text-left tracking-wide ltr">
          {product.englishTitle}
        </h2>
      </div>

      {/* امتیاز و دیدگاه‌ها */}
      <div className="flex gap-4 items-center w-full mt-3 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="font-bold text-gray-800">
            {product.rating?.value}
          </span>
          <span className="text-gray-400">
            ({product.rating?.reviewsCount})
          </span>
        </div>

        <div
          className="flex items-center 
      gap-2 px-1 py-1 border-b border-gray-100 bg-white"
        >
          {/* AI Summary */}
          <button
            className="flex items-center gap-1 bg-violet-100 
      text-gray-500 font-bold px-1 py-1 rounded-lg text-xs"
          >
            <BsStars className="text-purple-600 text-sm" />
            خلاصه دیدگاه‌ها
          </button>

          {/* Q&A */}
          <button
            className="flex items-center gap-1
       text-gray-600 font-medium py-1 px-1 rounded-lg
        text-xs bg-gray-100"
          >
            پرسش و پاسخ
            <RiArrowLeftSLine />
          </button>

          {/* Reviews */}
          <button
            className="flex items-cente
       text-gray-600 font-medium py-1 px-1  rounded-lg 
       text-xs bg-gray-100"
          >
            نظرات کاربران
            <RiArrowLeftSLine />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
// FINISH
