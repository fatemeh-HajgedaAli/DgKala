// Main-container
import DescriptionSection from "./DescriptionSection";
import ProductHighlights from "./ProductHighlights";
import ProductSpecs from "./ProductSpecs";
import StickyBuyBox from "./StickyBuyBox";
import ReadMore from "./ReadMore";
import ProductUserView from "./ProductUserView";
// start
export default function ProductDescription({ details, product }) {
  if (!details) return null;

  const descriptionText =
    typeof details.description === "object"
      ? details.description.long
      : details.description;
  // jsx
  return (
    <div
      dir="rtl"
      className="
        mt-10
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-10
      "
    >
      {/* Content */}
      <div className="lg:col-span-8 space-y-10">
        <section id="description" className="scroll-mt-24">
          <DescriptionSection description={descriptionText} />
        </section>

        <section id="highlights" className="scroll-mt-24">
          <ProductHighlights specifications={details.specifications} />
        </section>

        <section id="specs" className="scroll-mt-24">
          <ProductSpecs specifications={details.specifications} />
        </section>

        <section id="reviews" className="scroll-mt-24">
          <ProductUserView />
        </section>

        <ReadMore text={descriptionText} />

        {details.review && (
          <div
            className="
              bg-white
              p-6
              border-t
              border-gray-200
              leading-8
              text-gray-600
            "
          >
            <h3
              className="
                text-lg
                font-bold
                mb-4
                text-gray-900
              "
            >
              بررسی تخصصی محصول
            </h3>
            <span
              className="
    block
    w-[170px]
    h-[3px]
    bg-red-500
    rounded-full
    mt-2
    mb-4
  "
            />
            <p>{details.review}</p>
          </div>
        )}
      </div>

      {/* Sticky Buy Box */}
      <aside className="lg:col-span-4">
        <StickyBuyBox product={product} />
      </aside>
    </div>
  );
}
