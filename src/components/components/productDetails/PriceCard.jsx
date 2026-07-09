import { formatPrice } from "../../../../utils/price";
import { toFarsiNumber } from "../../../../utils/number";

export default function PriceCard({ product }) {
  const { price, finalPrice, discountPercent } = product?.pricing || {};

  const hasDiscount = discountPercent > 0;

  return (
    <div className="p-5 mt-15">
      {/* final price */}
      <div className="mt-2 space-y-1 float-left">
        <p className="font-bold text-lg">{formatPrice(finalPrice)} تومان</p>

        {hasDiscount && (
          <p className="text-sm text-gray-400 line-through">
            {formatPrice(price)} تومان
          </p>
        )}
      </div>

      {/* discount */}
      {hasDiscount && (
        <div className="mt-2 text-green-600">
          {toFarsiNumber(discountPercent)}% تخفیف
        </div>
      )}
    </div>
  );
}
