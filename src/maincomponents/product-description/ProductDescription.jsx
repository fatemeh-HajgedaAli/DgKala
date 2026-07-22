// Main-container
import DescriptionSection from "./DescriptionSection";
import ProductHighlights from "./ProductHighlights";
import ProductSpecs from "./ProductSpecs";
import StickyBuyBox from "./StickyBuyBox";
import ProductUserView from "./ProductUserView";

export default function ProductDescription({ details, product }) {
  if (!details) return null;

  const descriptionText =
    typeof details.description === "object"
      ? details.description.long
      : details.description;

  const productImages = product?.images || details?.images || [];

  return (
    <div dir="rtl" className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Content Side */}
      <div className="lg:col-span-8 space-y-8">
        {/* Product Images */}
        {productImages.length > 0 && (
          <section
            id="images"
            className="scroll-mt-24 bg-white p-6 border border-gray-100 rounded-2xl"
          >
            {/* Expert Review */}
            {details.review && (
              <section id="review" className="scroll-mt-24">
                <div className="bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    بررسی تخصصی محصول
                  </h3>
                  <span className="block w-12 h-1 bg-red-500 rounded-full mt-2 mb-4" />
                  <p className="text-sm leading-8 text-gray-700 text-justify">
                    {details.review}
                  </p>
                </div>
              </section>
            )}

            <div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-4 sm:overflow-visible">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="
        shrink-0
        w-30
        h-30
        sm:w-auto
        sm:h-auto
        sm:aspect-square
        rounded-xl
        overflow-hidden
        group
      "
                >
                  <img
                    src={image}
                    alt={`${product?.title || "محصول"} - تصویر ${index + 1}`}
                    className="
          w-full
          h-full
          object-contain
          p-2
          transition-transform
          duration-300
          group-hover:scale-105
        "
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Description */}
        <section id="description" className="scroll-mt-10">
          <DescriptionSection description={descriptionText} />
        </section>

        {/* Highlights */}
        {details.specifications && (
          <section id="highlights" className="scroll-mt-24">
            <ProductHighlights specifications={details.specifications} />
          </section>
        )}

        {/* Specifications */}
        {details.specifications && (
          <section id="specs" className="scroll-mt-24">
            <ProductSpecs specifications={details.specifications} />
          </section>
        )}

        {/* User Reviews */}
        <section id="reviews" className="scroll-mt-24">
          <ProductUserView />
        </section>
      </div>

      {/* Sticky Buy Box Side */}
      <aside className="lg:col-span-4">
        <StickyBuyBox product={product} />
      </aside>
    </div>
  );
}
