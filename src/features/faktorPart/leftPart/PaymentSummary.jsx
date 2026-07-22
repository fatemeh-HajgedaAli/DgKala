// src/features/shoppingCheckout/leftPart/PaymentSummary.jsx

import PaymentPriceRow from "./PaymentPriceRow";
import { useCart } from "../../../context/CartContext";
import { Percent } from "lucide-react";
import { HiMiniInformationCircle } from "react-icons/hi2";
const PaymentSummary = ({
  shippingCost = 120000,
  originalShippingCost = 228000,
}) => {
  const { state } = useCart();
  const items = state?.items || [];

  // محاسبه مجموع قیمت بدون تخفیف کالاها
  const totalOriginalPrice = items.reduce((total, item) => {
    const original =
      item.pricing?.mainPrice ??
      item.pricing?.originalPrice ??
      item.mainPrice ??
      item.originalPrice ??
      item.pricing?.finalPrice ??
      item.finalPrice ??
      528000;
    return total + original * (item.qty || 1);
  }, 0);

  // محاسبه مجموع قیمت با تخفیف کالاها
  const totalDiscountedItemsPrice = items.reduce((total, item) => {
    const price =
      item.pricing?.finalPrice ?? item.finalPrice ?? item.price ?? 210000;
    return total + price * (item.qty || 1);
  }, 0);

  // میزان تخفیف کالاها
  const itemsDiscount = Math.max(
    0,
    totalOriginalPrice - totalDiscountedItemsPrice,
  );

  // سود خریدار (تخفیف کالاها + تخفیف ارسال)
  const shippingDiscount = Math.max(0, originalShippingCost - shippingCost);
  const yourProfit = itemsDiscount + shippingDiscount;
  const profitPercentage =
    totalOriginalPrice > 0
      ? Math.round(
          (yourProfit / (totalOriginalPrice + originalShippingCost)) * 100,
        )
      : 60;

  // قیمت پرداختی نهایی
  const finalPrice = totalDiscountedItemsPrice + shippingCost;
  const originalFinalPrice = totalOriginalPrice + originalShippingCost;

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3.5 text-sm">
      {/* قیمت کالاها */}
      <PaymentPriceRow
        label={`قیمت کالاها (${(items.length || 1).toLocaleString("fa-IR")})`}
        value={`${totalOriginalPrice.toLocaleString("fa-IR")}`}
        unit="تومان"
        labelClassName="text-gray-500"
        valueClassName="text-gray-800 font-medium"
      />

      {/* مجموع هزینه ارسال با قیمت خط‌خورده */}
      <PaymentPriceRow
        label="مجموع هزینه ارسال"
        value={`${shippingCost.toLocaleString("fa-IR")}`}
        oldValue={`${originalShippingCost.toLocaleString("fa-IR")}`}
        unit="تومان"
        labelClassName="text-gray-500"
        valueClassName="text-gray-800 font-medium"
      />

      {/* متن توضیحات پرداخت اعتباری (طرح دیجی‌کالا) */}
      <div
        className="flex items-start gap-1.5 text-[11px] bg-gray-100 py-2 px-6 rounded-sm
       text-sky-800 font-normal -mt-1 pr-1 leading-relaxed"
      >
        <HiMiniInformationCircle size={20} className="text-sky-700 shrink-0" />
        <span className="font-light">
          در پرداخت اعتباری، هزینه ارسال شامل تخفیف نمی‌شود.
        </span>
      </div>

      {/* تخفیف کالاها (به همراه آیکون درصد) */}
      {itemsDiscount > 0 && (
        <PaymentPriceRow
          label={
            <div className="flex items-center gap-1">
              <span>تخفیف کالاها</span>
              <span className="bg-gray-100 text-gray-500 p-0.5 rounded text-[10px]">
                <Percent size={12} />
              </span>
            </div>
          }
          value={`${itemsDiscount.toLocaleString("fa-IR")}`}
          unit="تومان"
          labelClassName="text-gray-500"
          valueClassName="text-gray-800 font-medium"
        />
      )}

      <hr className="border-gray-100 my-0.5" />

      {/* سود شما از خرید */}
      <div className="flex items-center justify-between text-emerald-600 font-bold text-sm">
        <span>سود شما از خرید</span>
        <div className="flex items-center gap-1">
          <span>({profitPercentage.toLocaleString("fa-IR")}٪)</span>
          <span>{yourProfit.toLocaleString("fa-IR")}</span>
          <span className="text-[10px] text-emerald-600 font-normal">
            تومان
          </span>
        </div>
      </div>

      {/* مبلغ قابل پرداخت */}
      <PaymentPriceRow
        label="مبلغ قابل پرداخت"
        value={`${finalPrice.toLocaleString("fa-IR")}`}
        oldValue={`${originalFinalPrice.toLocaleString("fa-IR")}`}
        unit="تومان"
        labelClassName="text-gray-900 font-bold text-base"
        valueClassName="text-gray-900 font-bold text-base"
      />

      {/* دکمه قرمز پرداختی */}
      <button
        type="button"
        className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-sm text-base mt-2 cursor-pointer"
      >
        پرداخت
      </button>
    </div>
  );
};

export default PaymentSummary;
