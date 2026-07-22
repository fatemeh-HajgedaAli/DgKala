// main-Products-CARDS
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";
import { GoChecklist } from "react-icons/go";

// start
export default function ProductCard({ item }) {
  const price = item?.pricing?.price || 0;
  const discount = item?.pricing?.discountPercent || 0;
  const finalPrice = item?.pricing?.finalPrice || price;

  const rating = item?.rating?.value || 0;
  const fullStars = Math.floor(rating);

  const count = item?.inventory?.stock || 0;
  const inStock = count > 0;
  const image = item?.images?.[0] || "/placeholder.png";

  // JSX
  return (
    <>
      <Link
        to={`/product/${item.id}`}
        className="bg-white border border-gray-200 p-3 hover:shadow-xl transition hover:scale-105"
      >
        {/* image */}
        <img
          src={image}
          alt={item.title}
          className="h-40 w-full object-contain"
        />

        {/* title */}

        <p className="text-sm text-gray-500 line-clamp-1">
          {item?.description?.long ?? item.title}
        </p>
        {/* badge + stock */}
        <div className="flex justify-between mb-2">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            %{toFarsiNumber(discount)}
          </span>
          {/* rating */}
          <div className="text-yellow-400 text-sm mt-1">
            {"★".repeat(fullStars)}
            {"☆".repeat(5 - fullStars)}
            <span className="text-gray-700 text-xs mr-1">
              ({toFarsiNumber(rating.toFixed(1))})
            </span>
          </div>
        </div>
        {/* inStock */}
        <span
          className={`flex items-center text-xs px-2 py-1 gap-2 rounded-full ${
            inStock ? "text-gray-600 font-light" : "text-red-600 font-light"
          }`}
        >
          {count === 0 ? (
            <span>ناموجود</span>
          ) : count < 5 ? (
            <span className="text-red-500">{`تنها ${count} عدد در انبار باقی مانده`}</span>
          ) : (
            <span className="flex items-center gap-1">
              <GoChecklist className="text-blue-400 text-xl" />
              موجود در انبار دیجی کالا
            </span>
          )}
        </span>
        {/* price */}
        <div className="mt-2 space-y-1 float-left">
          <p className="font-bold text-lg">{formatPrice(finalPrice)} تومان</p>

          {discount > 0 && (
            <p className="text-sm text-gray-400 line-through">
              {formatPrice(price)} تومان
            </p>
          )}
        </div>
      </Link>
    </>
  );
}
// FINISH
