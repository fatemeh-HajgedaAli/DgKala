import MobileIncredibleBanner from "./mobilePart/MobileIncredibleBanner";
import MobileProductHeader from "./mobilePart/MobileProductHeader";
import MobileFeaturesSlider from "./mobilePart/MobileFeaturesSlider";
import MobileSellerSection from "./mobilePart/MobileSellerSection/MobileSellerSection";
import MobileGallary from "./mobilePart/MobileGallary";

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
      <MobileGallary product={product} />
      <MobileProductHeader product={product} />

      <hr className="h-px bg-gray-100 border-none my-2" />

      <div className="px-4 py-2 flex flex-col gap-2" dir="rtl">
        {/* colors */}
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
