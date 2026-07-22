// src/features/shoppingCheckout/paymentMethods/PaymentMethodPicker.jsx

import React, { useState } from "react";
import {
  CreditCard,
  Wallet,
  Building2,
  Tag,
  Gift,
  ChevronDown,
} from "lucide-react";

const PAYMENT_METHODS = [
  {
    id: "internet",
    title: "پرداخت اینترنتی",
    subtitle: "پرداخت آنلاین با تمامی کارت‌های بانکی",
    icon: CreditCard,
  },
  {
    id: "vip",
    title: "پرداخت با اعتبار وایپ",
    subtitle:
      "ویژه دارندگان کارت هدیه، اعتبار وایپ و کارت رفاهی (بانک رفاه کارگران)",
    icon: Wallet,
  },
  {
    id: "credit",
    title: "پرداخت با کارت اعتباری",
    subtitle: "ویژه بانک‌ها، سازمان‌ها و شرکت‌ها",
    icon: Building2,
  },
];

const PaymentMethodPicker = () => {
  const [selectedMethod, setSelectedMethod] = useState("internet");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [hasGiftCard, setHasGiftCard] = useState(false);

  return (
    <div className="space-y-4">
      {/* 💳 کارت اصلی انتخاب روش پرداخت */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-gray-900 font-bold text-base mb-6">
          انتخاب روش پرداخت
        </h2>

        <div className="space-y-6">
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon;
            const isSelected = selectedMethod === method.id;

            return (
              <label
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className="flex items-start justify-between cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className={`w-6 h-6 mt-0.5 ${isSelected ? "text-blue-600" : "text-gray-400"}`}
                  />
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base">
                      {method.title}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">
                      {method.subtitle}
                    </div>
                  </div>
                </div>

                {/* Radio Button سفارشی */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 transition-all ${
                    isSelected
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300 group-hover:border-gray-400"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </label>
            );
          })}
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-gray-700 mt-8 font-medium"
        >
          <span>مشاهده روش‌های دیگر</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* 🎟️ سوئیچ کد تخفیف */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHasDiscount(!hasDiscount)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
              hasDiscount ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                hasDiscount ? "-translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="font-bold text-gray-800 text-sm">کد تخفیف</span>
        </div>
        <Tag className="w-5 h-5 text-gray-400" />
      </div>

      {/* 🎁 سوئیچ کارت هدیه */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHasGiftCard(!hasGiftCard)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
              hasGiftCard ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                hasGiftCard ? "-translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="font-bold text-gray-800 text-sm">کارت هدیه</span>
        </div>
        <Gift className="w-5 h-5 text-gray-400" />
      </div>

      {/* 📋 خلاصه سفارش */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center justify-between cursor-pointer">
        <span className="font-bold text-gray-800 text-sm">خلاصه سفارش</span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default PaymentMethodPicker;
