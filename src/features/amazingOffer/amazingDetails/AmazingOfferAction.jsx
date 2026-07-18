import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

import { formatPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function AmazingOfferAction({ product }) {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  if (!product) return null;

  const id = product.id || product._id || product.productId;

  // ۱. بررسی لحظه‌ای وجود کالا در سبد خرید
  const cartItem = state.items.find(
    (item) => (item.id || item._id || item.productId) === id,
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    // خط navigate("/cart") را کامنت نگه می‌داریم تا کاربر در همین صفحه بماند و تغییر دکمه را ببیند
  };

  const handleIncrease = () => dispatch({ type: "INCREASE_QTY", payload: id });
  const handleDecrease = () => dispatch({ type: "DECREASE_QTY", payload: id });
  const handleRemove = () => dispatch({ type: "REMOVE_ITEM", payload: id });

  return (
    <aside
      className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-5 md:sticky md:top-5"
      dir="rtl"
    >
      {/* Seller */}
      <div>
        <h3 className="font-bold text-gray-800 text-sm">فروشنده</h3>
        <p className="text-xs text-gray-500 mt-2">۲ فروشنده دیگر</p>
      </div>

      {/* Seller Info */}
      <div className="flex flex-col gap-2">
        <span className="font-bold text-gray-800 text-sm">
          {product.seller?.name || "دیجی‌کالا"}
        </span>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-emerald-600 font-bold">
            {product.seller?.satisfaction || "۹۱.۶٪"}
          </span>
          <span className="text-gray-500">رضایت از کالا</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-gray-700">
            {product.seller?.performance || "عالی"}
          </span>
          <span className="text-gray-500">عملکرد</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price */}
      <div className="flex flex-col gap-2">
        {product.pricing?.discountPercent > 0 && (
          <div className="flex items-center justify-end gap-2">
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-black">
              {toFarsiNumber(product.pricing.discountPercent)}٪
            </span>
            <span className="line-through text-gray-400 text-sm">
              {formatPrice(product.pricing.price)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-end">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.pricing?.finalPrice || 0)}
            <span className="text-xs text-gray-500 mr-1 font-normal">
              تومان
            </span>
          </span>
        </div>
      </div>

      {/* ۲. btn - changes- to text */}
      {cartItem ? (
        <div className="flex items-center justify-between w-full gap-3">
          {/* باکس شمارنده افقی */}
          <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-3 py-2 bg-white shadow-sm shrink-0">
            <button
              onClick={handleIncrease}
              className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
            >
              <Plus size={16} strokeWidth={3} />
            </button>

            <span className="text-sm font-black text-slate-800 min-w-[12px] text-center">
              {toFarsiNumber(cartItem.qty)}
            </span>

            {Number(cartItem.qty) === 1 ? (
              <button
                onClick={handleRemove}
                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <Trash2 size={16} />
              </button>
            ) : (
              <button
                onClick={handleDecrease}
                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <Minus size={16} strokeWidth={3} />
              </button>
            )}
          </div>

          {/* متن عمودی سمت چپ */}
          <div className="flex flex-col items-end text-left justify-center flex-1">
            <span className="text-[11px] font-bold text-gray-800">
              در sabad شما
            </span>
            <button
              onClick={() => navigate("/cart")}
              className="text-[11px] font-extrabold text-cyan-500 hover:text-cyan-600 transition mt-0.5"
            >
              مشاهده سبد خرید
            </button>
          </div>
        </div>
      ) : (
        /* دکمه پیش‌فرض قبل از اولین کلیک */
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition"
        >
          افزودن به سبد خرید
        </button>
      )}

      {/* Guarantee & Shipping */}
      <div className="text-sm text-gray-700">
        🛡️{" "}
        <span className="mr-2">
          {product.guarantee || "گارانتی ۱۸ ماهه شرکتی"}
        </span>
      </div>
      <hr className="border-gray-200" />
      <div className="flex flex-col gap-3 text-xs text-gray-600">
        <div>
          <p className="font-bold text-gray-800">روش و هزینه ارسال</p>
          <p className="mt-2">🚚 توسط دیجی‌کالا • وابسته به سبد</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 text-green-700">
          ارسال سریع و رایگان دیجی‌کالا
          <br />
          فقط تهران و کرج
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-gray-800">دیجی‌کلاب</span>
        <span className="text-purple-600">⭐ ۱۵۰ امتیاز دیجی‌کلاب</span>
      </div>
    </aside>
  );
}
