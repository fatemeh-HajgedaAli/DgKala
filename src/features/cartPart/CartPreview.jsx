// src/features/cartPart/CartPreview.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import handBasket from "../../assets/logos/hand-basket.svg";
import { formatPrice } from "../../utils/price";
import { toFarsiNumber } from "../../utils/number";
import { Trash2, Plus, Minus } from "lucide-react";

// parts
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
// start
function MiniCartItem({ item, onIncrease, onDecrease, onRemove }) {
  const id = item.id || item._id || item.productId;
  const hasDiscount = item.pricing?.discountPercent > 0;
  // jsx
  return (
    <div className="flex  gap-3 py-4 border-b border-gray-100 last:border-0 items-start">
      <div className="w-20 h-20 shrink-0 border border-gray-100 rounded-xl p-1 bg-gray-50 flex items-center justify-center">
        <img
          src={item.images?.[0] || "/placeholder.png"}
          alt={item.title || "product"}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between min-h-[80px]">
        <h4 className="text-[13px] font-medium text-gray-700 line-clamp-2 leading-6 mb-2 pl-2">
          {item.title}
        </h4>

        <div className="flex justify-between items-center w-full mt-auto">
          <div className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-2 py-1 bg-white shadow-sm">
            <button
              onClick={() => onIncrease(id)}
              className="text-red-500 hover:bg-red-50 p-0.5 rounded transition-colors"
            >
              <Plus size={14} strokeWidth={2.5} />
            </button>

            <span className="text-xs font-bold text-gray-800 min-w-[10px] text-center">
              {toFarsiNumber(item.qty)}
            </span>

            {Number(item.qty) === 1 ? (
              <button
                onClick={() => onRemove(id)}
                className="text-red-500 hover:bg-red-50 p-0.5 rounded transition-colors"
              >
                <Trash2 size={14} />
              </button>
            ) : (
              <button
                onClick={() => onDecrease(id)}
                className="text-red-500 hover:bg-red-50 p-0.5 rounded transition-colors"
              >
                <Minus size={14} strokeWidth={2.5} />
              </button>
            )}
          </div>

          <div className="flex flex-col items-end gap-0.5">
            {hasDiscount && (
              <div className="flex items-center gap-1.5">
                <span className="bg-red-500 text-white text-[9px] px-1 py-0.5 rounded-full font-black">
                  {toFarsiNumber(item.pricing.discountPercent)}٪
                </span>
                <span className="text-[11px] text-gray-400 line-through">
                  {formatPrice(item.pricing.price)}
                </span>
              </div>
            )}
            <div className="text-[13px] font-black text-gray-900 flex items-center gap-0.5">
              {formatPrice(item.pricing?.finalPrice || 0)}
              <span className="text-[9px] text-gray-500 font-normal mr-0.5">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPreview({ closeCart }) {
  const { state, dispatch } = useCart();

  const handleIncrease = (id) =>
    dispatch({ type: "INCREASE_QTY", payload: id });
  const handleDecrease = (id) =>
    dispatch({ type: "DECREASE_QTY", payload: id });
  const handleRemove = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  // ۱. محاسبه مجموع قیمت نهایی سبد خرید
  const totalPrice = state.items.reduce(
    (sum, item) => sum + (item.pricing?.finalPrice || 0) * item.qty,
    0,
  );

  // ۲. محاسبه مجموع تخفیف‌های سبد خرید (تفاوت قیمت اصلی و نهایی کالاها ضربدر تعداد)
  const totalDiscount = state.items.reduce((sum, item) => {
    const originalPrice = item.pricing?.price || item.pricing?.finalPrice || 0;
    const finalPrice = item.pricing?.finalPrice || 0;
    const discountAmount =
      originalPrice > finalPrice ? originalPrice - finalPrice : 0;
    return sum + discountAmount * item.qty;
  }, 0);

  return (
    <div
      dir="rtl"
      className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
    >
      <CartHeader count={state.items.length} />

      <div className="max-h-[340px] overflow-y-auto px-4 dynamic-scroll">
        {state.items.length === 0 ? (
          <div className="py-10 text-center">
            <img
              src={handBasket}
              alt="empty"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="text-xs font-bold text-slate-500">
              سبد خرید شما خالی است!
            </h3>
          </div>
        ) : (
          state.items.map((item) => (
            <MiniCartItem
              key={item.id || item._id || item.productId}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          ))
        )}
      </div>

      {state.items.length > 0 && (
        <CartFooter
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          closeCart={closeCart}
        />
      )}
    </div>
  );
}
