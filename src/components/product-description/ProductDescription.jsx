import DescriptionSection from "./DescriptionSection";
import ProductHighlights from "./ProductHighlights";
import ProductSpecs from "./ProductSpecs";
import StickyBuyBox from "./StickyBuyBox";
import ReadMore from "./ReadMore";

export default function ProductDescription({ details, product }) {
  if (!details) return null;

  const descriptionText =
    typeof details.description === "object"
      ? details.description.long
      : details.description;

  return (
    <section
      dir="rtl"
      id="description"
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
        <DescriptionSection description={descriptionText} />

        <ProductHighlights specifications={details.specifications} />

        <ProductSpecs specifications={details.specifications} />

        <ReadMore text={descriptionText} />

        {details.review && (
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-sm
              border
              border-gray-100
              leading-8
              text-gray-700
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

            <p>{details.review}</p>
          </div>
        )}
      </div>

      {/* Sticky Buy Box */}

      <aside className="lg:col-span-4">
        <StickyBuyBox product={product} />
      </aside>
    </section>
  );
}
