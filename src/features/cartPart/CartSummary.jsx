// CartSummary.jsx
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/price";
import { toFarsiNumber } from "../../utils/number";
import { useNavigate } from "react-router-dom";
// start
export default function CartSummary() {
  const { state } = useCart();
  const navigate = useNavigate();
  const totalItems = state.items.reduce((sum, item) => sum + item.qty, 0);

  const totalOriginalPrice = state.items.reduce(
    (sum, item) => sum + item.pricing.price * item.qty,
    0,
  );

  const totalFinalPrice = state.items.reduce(
    (sum, item) => sum + item.pricing.finalPrice * item.qty,
    0,
  );

  const totalDiscount = totalOriginalPrice - totalFinalPrice;
// jsx
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-5 w-full max-w-[360px]"
      dir="rtl"
    >
      {/* عنوان اصلی */}
      <h2 className="text-[12px] font-bold text-slate-400 mb-5">
        جزئیات پرداخت
      </h2>

      <div className="space-y-4 text-[12px]">
        {/* مجموع قیمت کالاها */}
        <div className="flex justify-between items-center text-slate-500">
          <span>مجموع قیمت کالاها ({toFarsiNumber(totalItems)} کالا)</span>
          <div className="text-slate-700 font-bold text-[13px]">
            {formatPrice(totalOriginalPrice)}
            <span className="text-[10px] font-normal text-slate-400 mr-0.5">
              تومان
            </span>
          </div>
        </div>

        {/* سود شما از خرید */}
        {totalDiscount > 0 && (
          <div className="flex justify-between items-center text-emerald-500 font-bold">
            <span>سود شما از خرید</span>
            <div className="text-[13px]">
              {formatPrice(totalDiscount)}
              <span className="text-[10px] font-normal mr-0.5">تومان</span>
            </div>
          </div>
        )}

        {/* مجموع سبد خرید با ساختار دو قیمته */}
        <div className="flex justify-between items-start border-t border-slate-100 pt-4">
          <span className="text-slate-800 font-extrabold text-[13px] mt-1">
            مجموع سبد خرید
          </span>
          <div className="text-left flex flex-col items-end">
            {totalDiscount > 0 && (
              <span className="text-[11px] text-slate-400 line-through tracking-tight mb-0.5">
                {formatPrice(totalOriginalPrice)}
              </span>
            )}
            <div className="text-slate-900 font-black text-[15px]">
              {formatPrice(totalFinalPrice)}
              <span className="text-[10px] font-normal text-slate-500 mr-0.5">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* دکمه ثبت سفارش صورتی/قرمز دیجی‌کالا */}
      <button
        onClick={() => navigate("/checkout/shipping")}
        className="w-full mt-5 bg-[#ef4056] hover:bg-[#e03147] text-white py-3 rounded-lg font-bold text-[13px] transition-all"
      >
        ثبت سفارش
      </button>

      {/* متن راهنما و هشدار زیر دکمه همراه با آیکون اصلاح شده بدون شکستگی خط */}
      <div className="text-[10px] text-slate-400 font-medium leading-5 mt-3 text-justify flex gap-1.5 items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mt-0.5 shrink-0 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 111.056 1.056L12 12.75l-.347-.347m0 0l-.347-.347.347-.347m0 0V9a.75.75 0 011.5 0v3a.75.75 0 01-.75.75h-.375a.75.75 0 01-.75-.75zM12 1.5a10.5 10.5 0 1010.5 10.5A10.5 10.5 0 0012 1.5z"
          />
        </svg>
        <span>
          مبلغ سفارش هنوز پرداخت نشده و در صورت اتمام موجودی، کالاها از سبد حذف
          می‌شوند.
        </span>
      </div>
    </div>
  );
}
