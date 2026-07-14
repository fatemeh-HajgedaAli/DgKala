// information
// icons
import { BsStars } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";
import { BiChevronLeft } from "react-icons/bi";
import FeatureList from "./FeatureList";
// change-Number-format
import { toFarsiNumber } from "../../../../utils/number";
import { Link } from "react-router";
// start
export default function ProductInfo({ product }) {
  if (!product) return null;
  // jsx
  return (
    <div className="flex flex-col w-full" dir="rtl">
      {/* categories */}
      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-500 mb-2">
        <span className="hover:underline cursor-pointer">
          {product?.brand || "متفرقه"}
        </span>
      </div>

      {/* fa-title) */}
      <h1 className="text-gray-800 font-bold text-lg lg:text-xl leading-8 mb-1">
        {product?.title || product?.description?.long}
      </h1>

      {/* english title */}
      {product?.englishTitle && (
        <span className="text-gray-400 text-xs font-mono tracking-wide block mb-3">
          {product.englishTitle}
        </span>
      )}

      <hr className="my-2 border-gray-100" />

      {/* بخش امتیاز، خلاصه دیدگاه‌ها و پرسش‌ها */}
      <div className="flex flex-wrap items-center gap-4 mt-2 pb-4 border-b border-gray-200 text-xs text-gray-600">
        {/* امتیاز ستاره‌ای */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="font-bold text-gray-800">
            {toFarsiNumber(product?.rating?.value || 0)}
          </span>

          <span className="text-gray-400">
            ({toFarsiNumber(product?.rating?.reviewsCount || 0)})
          </span>
        </div>

        {/* readMore */}
        <div className="flex items-center gap-2 flex-wrap">
          <button className="flex items-center gap-1 bg-violet-100 text-gray-600 font-bold px-2 py-1 rounded-lg text-xs">
            <BsStars className="text-purple-600" />
            خلاصه دیدگاه‌ها
          </button>

          <button className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
            پرسش و پاسخ
            <RiArrowLeftSLine />
          </button>

          <button className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
            نظرات کاربران
            <RiArrowLeftSLine />
          </button>
        </div>
      </div>

      {/* colors */}
      {product?.colors && product.colors.length > 0 && (
        <div className="mt-4">
          <span className="text-gray-700 font-bold text-sm">رنگ:</span>
          <div className="flex gap-3 mt-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                title={color.name}
                className="w-8 h-8 rounded-full border-2 border-gray-300 p-1 hover:border-cyan-500 transition"
              >
                <span
                  className="block w-full h-full rounded-full"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* جدول مشخصات فنی و ویژگی‌ها */}
      <div className="mt-6">
        <h3 className="font-bold text-sm text-gray-800 mb-3">ویژگی‌ها</h3>
        <div className="flex flex-col gap-1 ">
          <FeatureList product={product} />
        </div>
      </div>
      {/* moreFeatures */}
      <div className="flex flex-col items-center w-full ">
                  <Link
                    to={`/amazing/${product.id}/description`}
                    className="flex items-center justify-center w-full my-4 
                    text-sm font-medium text-gray-500 hover:text-gray-700 
                    transition-colors gap-4"
                  >
                    {/* right-line */}
                    <span className="h-[1px] flex-1 bg-gray-100"></span>
    
                    {/* text+btn */}
                    <span className="flex items-center gap-1 flex-shrink-0 border-1 border-gray-200 p-2 rounded-xl">
                      مشاهده همه ویژگی‌ها
                      <BiChevronLeft className="text-xl mt-0.5" />
                    </span>
    
                    {/* left */}
                    <span className="h-[1px] flex-1 bg-gray-100"></span>
                  </Link>
      </div>
      {/* باکس اخطار/اطلاعیه مرجوعی کالا */}
      <div className="flex items-start gap-2.5 mt-5 p-3 bg-gray-50/50 border border-gray-100 rounded-xl">
        <IoInformationCircle className="text-xl text-gray-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-gray-500 leading-5 font-light">
          درخواست مرجوع کردن کالا با دلیل "انصراف از خرید" تنها در صورتی قابل
          تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید
          باز شده باشد).
        </p>
      </div>
    </div>
  );
}
