// START
import AmazingFeature from "./AmazingFeature";

export default function AmazingInfo({ product }) {
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

      {/* بخش امتیاز و نظرات */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="text-yellow-500 font-bold">
          ★ {product.rating?.value}
        </span>
        <span className="text-gray-300">|</span>
        <span>{product.rating?.reviewsCount} دیدگاه</span>
      </div>

      {/* انتخاب رنگ */}
      <div className="mt-4">
        <span className="text-gray-700 font-bold text-sm">
          رنگ: {product.color}
        </span>
        <div className="w-6 h-6 rounded-full border-2 border-cyan-500 mt-2 bg-white flex items-center justify-center p-0.5">
          <div className="w-full h-full rounded-full bg-white border border-gray-300" />
        </div>
      </div>

      {/* بخش خلاصه ویژگی‌های محصول */}
      <div className="mt-6">
        <h3 className="font-bold text-sm text-gray-800 mb-3">ویژگی‌ها</h3>
        <div className="flex flex-col gap-1 bg-gray-50 p-4 rounded-xl">
          {product.features?.map((feat, index) => (
            <AmazingFeature key={index} name={feat.name} value={feat.value} />
          ))}
        </div>
      </div>
    </div>
  );
}
// FINISH
