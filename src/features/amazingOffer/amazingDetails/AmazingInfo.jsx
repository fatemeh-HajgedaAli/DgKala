// START
import { BsStars } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

import AmazingFeature from "./AmazingFeature";

export default function AmazingInfo({ product }) {
  if (!product) return null;

  return (
    <div className="flex flex-col gap-3" dir="rtl">
      {/* برند */}
      <span className="text-cyan-500 text-xs font-semibold">
        {product.brand}
      </span>

      {/* عنوان فارسی */}
      <h1 className="text-gray-800 font-bold text-lg leading-8">
        {product.title}
      </h1>

      {/* عنوان انگلیسی */}
      <span className="text-gray-400 text-xs font-mono tracking-wide">
        {product.englishTitle}
      </span>

      <hr className="my-2 border-gray-100" />

      {/* امتیاز و دیدگاه‌ها */}
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-sm">★</span>

          <span className="font-bold text-gray-800">
            {product.rating?.value}
          </span>

          <span className="text-gray-400">
            ({product.rating?.reviewsCount})
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="
            flex items-center gap-1
            bg-violet-100
            text-gray-600
            font-bold
            px-2
            py-1
            rounded-lg
            text-xs
            "
          >
            <BsStars className="text-purple-600" />
            خلاصه دیدگاه‌ها
          </button>

          <button
            className="
            flex items-center gap-1
            bg-gray-100
            text-gray-600
            px-2
            py-1
            rounded-lg
            text-xs
            "
          >
            پرسش و پاسخ
            <RiArrowLeftSLine />
          </button>

          <button
            className="
            flex items-center gap-1
            bg-gray-100
            text-gray-600
            px-2
            py-1
            rounded-lg
            text-xs
            "
          >
            نظرات کاربران
            <RiArrowLeftSLine />
          </button>
        </div>
      </div>

      {/* انتخاب رنگ */}
      <div className="mt-4">
        <span className="text-gray-700 font-bold text-sm">رنگ:</span>

        <div className="flex gap-3 mt-3">
          {product.colors?.map((color, index) => (
            <button
              key={index}
              title={color.name}
              className="
        w-8
        h-8
        rounded-full
        border-2
        border-gray-300
        p-1
        hover:border-cyan-500
        transition
        "
            >
              <span
                className="
          block
          w-full
          h-full
          rounded-full
          "
                style={{
                  backgroundColor: color.value,
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ویژگی‌ها */}
      <div className="mt-6">
        <h3 className="font-bold text-sm text-gray-800 mb-3">ویژگی‌ها</h3>

        <div
          className="
        flex 
        flex-col 
        gap-1 
        bg-gray-50 
        p-4 
        rounded-xl
        "
        >
          {product.features?.map((feat, index) => (
            <AmazingFeature key={index} name={feat.name} value={feat.value} />
          ))}
        </div>
      </div>
    </div>
  );
}
// FINISH
