// src/features/shopingCheckout/leftPart/ShippingSummary.jsx
import React from "react";
import PriceRow from "./PriceRow";
import CheckoutButton from "./CheckoutButton";
import { Info } from "lucide-react";

const ShippingSummary = () => {
  // داده‌های نمونه قیمت - باید از سورس اصلی (مثل Redux یا Context) بیاد
  const summaryData = {
    totalItemsPrice: "۲,۷۱۸,۵۵۰",
    normalShippingCost: "تعیین نشده", // یا مبلغ
    sellerShippingCost: "۱۲۰,۰۰۰",
    yourProfit: "۱,۲۱۲,۵۹۰",
    profitPercentage: 45,
    finalPrice: "۱,۶۲۵,۹۶۰",
    originalFinalPrice: "۲,۷۱۸,۵۵۰", // قیمت قبل از تخفیف کل
  };

  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-4">
      <PriceRow
        label="قیمت کالاها (۳)"
        value={`${summaryData.totalItemsPrice} تومان`}
      />
      <PriceRow
        label="ارسال عادی"
        value={summaryData.normalShippingCost}
        valueClassName={
          summaryData.normalShippingCost === "تعیین نشده" ? "text-gray-500" : ""
        }
        icon={<Info size={14} className="text-gray-400" />}
      />
      <PriceRow
        label="ارسال فروشنده"
        value={`${summaryData.sellerShippingCost} تومان`}
      />

      <div className="border-b border-gray-100 my-2"></div>

      <PriceRow
        label="سود شما از خرید"
        value={`${summaryData.yourProfit} تومان (${summaryData.profitPercentage}٪)`}
        valueClassName="text-green-600 font-medium"
      />

      <PriceRow
        label="مبلغ قابل پرداخت"
        value={`${summaryData.finalPrice} تومان`}
        labelClassName="text-gray-900 font-bold text-base"
        valueClassName="text-gray-900 font-bold text-base"
      />
      {summaryData.originalFinalPrice && (
        <div className="text-xs text-gray-400 line-through text-left -mt-2 pl-1">
          {summaryData.originalFinalPrice} تومان
        </div>
      )}

      <div className="mt-4">
        <CheckoutButton text="انتخاب زمان ارسال" />
      </div>
    </div>
  );
};

export default ShippingSummary;
