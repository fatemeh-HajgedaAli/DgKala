// src/features/shopingCheckout/leftPart/ShippingSummary.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; // ۱. ایمپورت useNavigate
import PriceRow from "./PriceRow";
import CheckoutButton from "./CheckoutButton"; // ۲. ایمپورت یک‌باره دکمه
import { Info } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import sender from "../../../assets/logos/sender-man.webp";

const ShippingSummary = ({ shippingCost = 0 }) => {
  const navigate = useNavigate(); // ۳. فراخوانی هوک
  const { state } = useCart();
  const items = state?.items || [];

  // ۱. مجموع قیمت نهایی کالاها (با تخفیف)
  const baseItemsPrice = items.reduce((total, item) => {
    const price = item.pricing?.finalPrice ?? item.finalPrice ?? 0;
    return total + price * item.qty;
  }, 0);

  // ۲. مجموع قیمت اصلی کالاها (بدون تخفیف)
  const totalOriginalPrice = items.reduce((total, item) => {
    const original =
      item.pricing?.mainPrice ??
      item.mainPrice ??
      item.pricing?.finalPrice ??
      item.finalPrice ??
      0;
    return total + original * item.qty;
  }, 0);

  // ۳. محاسبه سود
  const yourProfit = Math.max(0, totalOriginalPrice - baseItemsPrice);
  const profitPercentage =
    totalOriginalPrice > 0
      ? Math.round((yourProfit / totalOriginalPrice) * 100)
      : 0;

  const sellerShippingCost = 120000;

  // ۴. مبلغ نهایی قابل پرداخت
  const finalPrice = baseItemsPrice + sellerShippingCost + shippingCost;

  // ۵. مبلغ کل قبل از تخفیف (برای خط خوردن)
  const originalFinalPrice =
    totalOriginalPrice + sellerShippingCost + shippingCost;

  // ۴. تعریف تابع هدایت به صفحه پرداخت
  const handleCheckout = () => {
    navigate("/checkout/payment");
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3.5 text-sm">
      {/* قیمت کالاها */}
      <PriceRow
        label={`قیمت کالاها (${items.length.toLocaleString("fa-IR")})`}
        value={`${baseItemsPrice.toLocaleString("fa-IR")} تومان`}
        labelClassName="text-gray-600"
        valueClassName="text-gray-800 font-medium"
      />

      {/* ارسال عادی */}
      <PriceRow
        label="ارسال عادی"
        value={
          shippingCost > 0
            ? `${shippingCost.toLocaleString("fa-IR")} تومان`
            : "تعیین نشده"
        }
        valueClassName={
          shippingCost === 0
            ? "text-gray-400 font-normal"
            : "text-gray-800 font-medium"
        }
        icon={<Info size={14} className="text-gray-400" />}
        labelClassName="text-gray-600"
      />

      {/* ارسال فروشنده */}
      <PriceRow
        label="ارسال فروشنده"
        value={`${sellerShippingCost.toLocaleString("fa-IR")} تومان`}
        icon={
          <img
            src={sender}
            alt="ارسال فروشنده"
            className="w-5 h-5 object-contain"
          />
        }
      />

      {/* خط جداکننده */}
      <hr className="border-gray-100 my-1" />

      {/* سود شما از خرید */}
      {yourProfit > 0 && (
        <div className="flex items-center justify-between text-red-500 font-medium text-xs md:text-sm">
          <span>سود شما از خرید</span>
          <span>
            {yourProfit.toLocaleString("fa-IR")} تومان (
            {profitPercentage.toLocaleString("fa-IR")}٪)
          </span>
        </div>
      )}

      {/* مبلغ قابل پرداخت */}
      <PriceRow
        label="مبلغ قابل پرداخت"
        value={`${finalPrice.toLocaleString("fa-IR")} تومان`}
        oldValue={
          yourProfit > 0
            ? `${originalFinalPrice.toLocaleString("fa-IR")} تومان`
            : null
        }
        labelClassName="text-gray-900 font-bold text-base"
        valueClassName="text-gray-900 font-bold text-base"
      />

      {/* دکمه ثبت سفارش */}
      <div className="mt-2">
        <CheckoutButton text="ثبت و ادامه خرید" onClick={handleCheckout} />
      </div>
    </div>
  );
};

export default ShippingSummary;
