// src/features/cartPart/CartItem.jsx
import { formatPrice } from "../../utils/price";
import { toFarsiNumber } from "../../utils/number";
// icons
import { Trash2, Plus, Minus } from "lucide-react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

// start
export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  if (!item) return null;
  const id = item.id || item._id || item.productId;

  const hasDiscount =
    item.pricing?.discountPercent > 0 ||
    item.pricing?.price > item.pricing?.finalPrice;
  // jsx
  return (
    <>
      <div
        dir="rtl"
        className="relative flex justify-between gap-6 p-6 bg-white w-full mt-4 mb-2
  after:content-[''] after:absolute after:bottom-0 after:inset-x-6 after:border-b after:border-gray-200
  last:after:hidden"
      >
        {/* بخش تصویر محصول */}
        <div className="shrink-0">
          <div className="w-42 h-42 rounded-2xl border border-gray-100 p-2 flex items-center justify-center bg-gray-100/70">
            <img
              src={item.images?.[0] || "/placeholder.png"}
              alt={item.title || "product"}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* بخش اطلاعات متنی، قیمت و دکمه‌ها */}
        <div className="flex-1 flex flex-col justify-between min-h-[140px]">
          <div>
            {/* برچسب‌ها (tags) */}
            {hasDiscount && (
              <div className="flex items-center gap-2 mb-2">
                {item.isAmazing ? (
                  <div className="flex items-center gap-1 text-red-500 text-[11px] font-bold">
                    <span>شگفت‌انگیز</span>
                    <span className="text-gray-400 font-normal mr-1">
                      ۱۲ : ۴۶ : ۳۲
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center gap-1 text-pink-500 text-[11px] font-bold bg-pink-50 px-4 py-0.5 rounded-full">
                    <BiSolidOffer />
                    <span>فروش ویژه</span>
                  </div>
                )}
              </div>
            )}

            {/* عنوان کالا و قیمت */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-3 leading-6 max-w-[500px]">
                {item.title}
              </h3>

              {/* قیمت و تخفیف */}
              <div className="flex flex-col items-end gap-1 mb-2 shrink-0">
                {hasDiscount && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(item.pricing.price)}
                    </span>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">
                      {toFarsiNumber(item.pricing.discountPercent)}٪
                    </span>
                  </div>
                )}
                <div className="text-sm font-black text-gray-900 flex items-center gap-0.5">
                  {formatPrice(item.pricing?.finalPrice || 0)}
                  <span className="text-[10px] text-gray-500 font-normal mr-0.5">
                    تومان
                  </span>
                </div>
              </div>
            </div>

            {/* ویژگی ارسال */}
            <div className="flex items-center gap-1.5 text-[11px] text-gray-700 mb-4">
              <span className="text-blue-700 text-lg">
                <AiOutlineFieldTime />
              </span>
              <span>ارسال سریع</span>
            </div>
          </div>

          {/*  (bottom - btns) */}
          <div className="flex justify-end items-center w-full gap-8">
            {/*   بعدا می‌خرم-btn */}
            <button
              onClick={() => onRemove(id)}
              className="text-xs font-bold text-gray-600 border border-gray-200 rounded-xl px-6 py-3 hover:bg-gray-50 transition cursor-pointer"
            >
              بعدا می‌خرم
            </button>

            {/* کنترلر تعداد محصول */}
            <div className="flex items-center text-red-500 gap-4 border border-gray-200 rounded-4xl px-2 py-2.5 bg-white shrink-0">
              <button onClick={() => onIncrease(id)}>
                <Plus size={16} strokeWidth={3} />
              </button>

              <span className="text-sm font-black min-w-[12px] text-center">
                {toFarsiNumber(item.qty)}
              </span>

              {Number(item.qty) === 1 ? (
                <button onClick={() => onRemove(id)}>
                  <Trash2 size={16} />
                </button>
              ) : (
                <button
                  onClick={() => onDecrease(id)}
                  className="text-red-500 hover:bg-red-50 p-0.5 rounded transition-colors"
                >
                  <Minus size={16} strokeWidth={3} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
