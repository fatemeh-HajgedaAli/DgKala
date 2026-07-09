import MobileIncredibleBanner from "./mobilePart/MobileIncredibleBanner";
import MobileProductHeader from "./mobilePart/MobileProductHeader";
import MobileFeaturesSlider from "./mobilePart/MobileFeaturesSlider";
import MobileSellerSection from "./mobilePart/MobileSellerSection/MobileSellerSection";

export default function MobileProductLayout({ product }) {
  if (!product) return null;

  const offerDuration = product.discountDuration || 5 * 60 * 60 * 1000;

  return (
    <div
      id="content"
      className="
      z-20
      relative
      bg-white
      rounded-t-2xl
      overflow-hidden
      pb-6
      shadow-xl
      border-t
      border-gray-100
      max-w-md
      mx-auto
      "
    >
      <MobileIncredibleBanner
        remainingPercent={product.remainingPercent || 63}
        duration={offerDuration}
      />

      <MobileProductHeader product={product} />

      <hr className="h-px bg-gray-100 border-none my-2" />

      <div className="px-4 py-2 flex flex-col gap-2" dir="rtl">
        <span className="text-xs font-bold text-gray-500">
          رنگ: {product.color}
        </span>

        <div
          className="
        w-6
        h-6
        rounded-full
        border-2
        border-gray-900
        bg-white
        "
        >
          <div
            className="
          w-full
          h-full
          rounded-full
          bg-white
          border
          border-gray-200
          "
          />
        </div>
      </div>

      <hr className="h-2 bg-gray-100 border-none my-2" />

      <MobileFeaturesSlider features={product.features} />

      <hr className="h-2 bg-gray-100 border-none my-2" />

      <MobileSellerSection
        seller={product.seller}
        guarantee={product.guarantee}
      />
    </div>
  );
}
