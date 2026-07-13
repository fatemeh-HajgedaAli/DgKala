import { formatPrice } from "../../../../utils/price";
import { toFarsiNumber } from "../../../../utils/number";

export default function PriceCard({ product }) {
  const { price, finalPrice, discountPercent } = product?.pricing || {};
  const hasDiscount = discountPercent > 0;

  return (
    <div className="w-full py-4 flex flex-col items-end justify-center">
      {/* ردیف تخفیف و قیمت خط خورده */}
      {hasDiscount && (
        <div className="flex items-center gap-2 mb-1 justify-end w-full">
          <span className="text-[11px] font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded-full">
            {toFarsiNumber(discountPercent)}٪
          </span>
          <span className="text-sm text-gray-400 line-through tracking-tight">
            {formatPrice(price)}
          </span>
        </div>
      )}

      {/* قیمت نهایی نهایی */}
      <div className="flex items-center gap-1.5 text-gray-900 justify-end w-full">
        <span className="font-bold text-xl tracking-tight">
          {formatPrice(finalPrice)}
        </span>
        <span className="text-[11px] font-medium">تومان</span>
      </div>
    </div>
  );
}
