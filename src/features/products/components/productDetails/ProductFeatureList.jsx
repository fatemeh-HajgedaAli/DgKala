// features
import { toFarsiNumber } from "../../../../utils/number";

export default function ProductFeatureList({ product }) {
  if (!product?.features) return null;

  const convertNumbers = (value) => {
    if (!value) return "";

    return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {product.features.map((item, index) => (
          <div
            key={index}
            className="
              border
              border-gray-200
              rounded-xl
              p-3
              bg-gray-50
              shadow-sm
            "
          >
            <div className="flex flex-col gap-2">
              {/* title */}
              <span
                className="
                  text-xs
                  text-gray-400
                  font-light
                "
              >
                {item.name}
              </span>

              {/* value */}
              <span
                className="
                  text-sm
                  text-gray-700
                  font-medium
                  leading-6
                "
              >
                {convertNumbers(item.value)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
