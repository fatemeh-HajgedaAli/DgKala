// src/features/cartPart/CartFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/price";
import { toFarsiNumber } from "../../utils/number";
// start
export default function CartFooter({
  totalPrice = 0,
  totalDiscount = 0,
  totalDiscountPercent = 0,
  closeCart,
}) {
  const priceBeforeDiscount = totalPrice + totalDiscount;

  const discountPercent =
    totalDiscountPercent ||
    (priceBeforeDiscount > 0
      ? Math.round((totalDiscount / priceBeforeDiscount) * 100)
      : 0);

  const hasAnyDiscount = totalDiscount > 0 || discountPercent > 0;
  // jsz
  return (
    <div
      dir="rtl"
      className="border-t border-gray-100 p-2 bg-white w-full flex flex-col shadow-[0_-4px_12px_rgba(0,0,0,0.03)]"
    >
      {hasAnyDiscount && (
        <div className="flex items-center justify-end gap-2 px-1">
          <span className="text-xs text-gray-400 line-through">
            {formatPrice(priceBeforeDiscount)}
          </span>
          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">
            {toFarsiNumber(discountPercent)}٪
          </span>
        </div>
      )}

      <div className="flex items-center justify-between w-full ">
        <Link
          to="/checkout/shipping"
          onClick={closeCart}
          className="bg-rose-500 hover:bg-rose-600 text-white px-16 py-4 rounded-xl text-sm font-bold transition-all active:scale-[0.98] text-center cursor-pointer shadow-sm"
        >
          ثبت سفارش
        </Link>

        <div className="flex flex-col items-end justify-center">
          <div className="font-black text-base text-gray-900 flex items-center gap-0.5">
            {formatPrice(totalPrice)}
            <span className="text-[10px] text-gray-600 font-normal mr-1">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
