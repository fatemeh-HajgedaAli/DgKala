// START
import MobileIncredibleBanner from "./mobilePart/MobileIncredibleBanner";
import MobileProductHeader from "./mobilePart/MobileProductHeader";
import MobileFeaturesSlider from "./mobilePart/MobileFeaturesSlider";
import MobileSellerSection from "./mobilePart/MobileSellerSection/MobileSellerSection";

export default function MobileProductLayout({ product }) {
  // در صورتی که در محصول تایم خاصی نبود، به صورت پیش‌فرض ۵ ساعت قرار می‌گیرد
  const offerDuration = product?.discountDuration || 5 * 60 * 60 * 1000;

  return (
    <div
      id="content"
      className="z-20 relative bg-white rounded-t-2xl overflow-hidden pb-6 shadow-xl border-t border-gray-100 max-w-md mx-auto"
    >
      {/* ۱. بنر شگفت انگیز داینامیک بالای کامپوننت */}
      <MobileIncredibleBanner
        remainingPercent={product?.remainingPercent || 63}
        duration={offerDuration}
      />

      {/* ۲. هدر محصول و تایتل‌ها */}
      <MobileProductHeader product={product} />

      <hr className="w-full bg-gray-100 border-none h-[1px] my-2" />

      {/* ۳. انتخابگر رنگ کالا */}
      <div className="px-4 py-2 flex flex-col gap-2" dir="rtl">
        <span className="text-xs font-bold text-gray-500">
          رنگ: {product.color}
        </span>
        <div className="w-6 h-6 rounded-full border-2 border-gray-900 p-0.5 bg-white">
          <div className="w-full h-full rounded-full bg-white border border-gray-200" />
        </div>
      </div>

      <hr className="w-full bg-gray-100 border-none h-[1px] my-2" />

      {/* ۴. مشخصات کالا */}
      <MobileFeaturesSlider features={product.features} />

      <hr className="w-full bg-gray-100 border-none h-2 my-2" />

      {/* ۵. اطلاعات فروشگاه، گارانتی و خدمات اقساطی */}
      <MobileSellerSection
        seller={product.seller}
        guarantee={product.guarantee}
      />
    </div>
  );
}
// FINISH
