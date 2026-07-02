// // شگفت‌انگیز سفارشی
// slider
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import offerLogo from "../../../assets/logos/IncredibleOffer-logo.svg";
import { GoChecklist } from "react-icons/go";
import { toFarsiNumber } from "../../../utils/number";
import { formatPrice } from "../../../utils/price";

const AmazingBuySlider = forwardRef(({ products }, ref) => {
  return (
    <div
      ref={ref}
      className="flex overflow-x-auto scroll-smooth hide-scrollbar"
    >
      {products.map((item) => {
        const { price, discountPercent, finalPrice } = item.pricing;
        const { value: rating } = item.rating;
        const { stock, inStock } = item.inventory;
        const image = item.images?.[0];

        return (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="min-w-[240px] bg-white p-4 border-r 
            border-gray-200 hover:shadow-sm transition"
          >
            <img
              src={offerLogo}
              alt="offerLogo"
              className="mx-4 items-center"
            />

            {/* image */}
            <img src={image} className="w-full h-40 object-contain" />

            {/* title */}
            <h3 className="mt-3 text-sm text-gray-700 line-clamp-2">
              {item.title}
            </h3>

            {/* rating */}
            <div className="flex justify-end mt-2 text-sm">
              <span className="text-yellow-500">★</span>
              <span className="mr-1 text-gray-600">
                {toFarsiNumber(rating.toFixed(1))}
              </span>
            </div>

            {/* price */}
            <div className="mt-3 flex justify-between items-center">
              <span className="bg-red-600 text-white text-xs px-2 py-1 
              rounded-full">
                %{toFarsiNumber(discountPercent)}
              </span>

              <span className="font-bold text-sm">
                {formatPrice(finalPrice)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
});

export default AmazingBuySlider;
