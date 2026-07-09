import { useNavigate } from "react-router-dom";

import { formatPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";

export default function AmazingOfferAction({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const handleAddToCart = () => {
    navigate("/cart", {
      state: {
        product,
      },
    });
  };

  return (
    <div
      className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 md:sticky md:top-4"
      dir="rtl"
    >
      <h3 className="font-bold text-gray-800 text-sm">فروشنده</h3>

      <div className="flex flex-col gap-1 text-xs text-gray-600">
        <span className="font-bold text-gray-800">{product.seller?.name}</span>

        <span className="text-emerald-600 font-medium">
          رضایت {product.seller?.satisfaction}
          {" | "}
          عملکرد {product.seller?.performance}
        </span>
      </div>

      <hr className="border-gray-200" />

      <div className="text-xs text-gray-700 font-medium flex items-center gap-2">
        🛡️ {product.guarantee}
      </div>

      <hr className="border-gray-200" />

      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {toFarsiNumber(product.pricing?.discountPercent)}٪
          </span>

          <span className="line-through text-gray-400 text-sm">
            {formatPrice(product.pricing?.price)}
          </span>
        </div>

        <div className="text-xl font-bold">
          {formatPrice(product.pricing?.finalPrice)}

          <span className="text-xs text-gray-500"> تومان</span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="
        w-full
        bg-red-500
        hover:bg-red-600
        text-white
        font-bold
        py-3
        rounded-xl
        transition
        "
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}
