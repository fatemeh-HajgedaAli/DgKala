// mobile-Cart-bar
import { Plus, Minus, Trash2 } from "lucide-react";

import { formatPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";
// start
export default function MobileAddToCart({
  product,
  cartItem,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleRemove,
  navigate,
}) {
  const { price, finalPrice, discountPercent } =
    product?.pricing || product || {};
  const hasDiscount = discountPercent > 0;
  console.log(product);
  console.log(product?.pricing);
  // jsx
  return (
    <div
      className="
        lg:hidden
        fixed
        bottom-0
        right-0
        left-0
        z-50
        bg-white
        border-t
        border-gray-200
        p-3
        shadow-[0_-4px_12px_rgba(0,0,0,0.08)]
      "
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        {/* کنترل سبد */}
        <div className="flex-1">
          {cartItem ? (
            <div className="flex items-center justify-between gap-2">
              <div
                className="
                flex
                items-center
                gap-4
                border
                border-gray-200
                rounded-xl
                px-3
                py-2
              "
              >
                <button onClick={handleIncrease} className="text-red-500">
                  <Plus size={16} strokeWidth={3} />
                </button>

                <span className="font-black">
                  {toFarsiNumber(cartItem.qty)}
                </span>

                {Number(cartItem.qty) === 1 ? (
                  <button onClick={handleRemove} className="text-red-500">
                    <Trash2 size={16} />
                  </button>
                ) : (
                  <button onClick={handleDecrease} className="text-red-500">
                    <Minus size={16} strokeWidth={3} />
                  </button>
                )}
              </div>
              {/* main-Btn */}
              <button
                onClick={() => navigate("/cart")}
                className="
                  text-xs
                  font-bold
                  text-cyan-600
                  bg-cyan-50
                  px-3
                  py-2
                  rounded-lg
                "
              >
                مشاهده سبد
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="
                w-[200px]
                h-12
                bg-red-600
                text-white
                rounded-xl
                font-bold
                text-sm
                flex
                items-center
                justify-center
                gap-2
              "
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
        {/* قیمت */}
        <div className="flex flex-col items-end shrink-0">
          {hasDiscount && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(price)}
              </span>

              <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                {toFarsiNumber(discountPercent)}٪
              </span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <span className="font-bold text-[16px] text-gray-900">
              {formatPrice(finalPrice)}
            </span>

            <span className="text-[8px]">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
