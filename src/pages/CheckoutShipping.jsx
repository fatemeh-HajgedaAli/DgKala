import React from "react";
import { Link } from "react-router-dom";
// icons
import { HiArrowRight } from "react-icons/hi";

// image
import dglogo from "../assets/logos/dg-logo.svg";

// ایمپورت کامپوننت‌های بخش راست
import AddressSection from "../features/shopingCheckout/rightPart/AddressSection";
import DigikalaPlusBanner from "../features/shopingCheckout/rightPart/DigikalaPlusBanner";
import ShipmentHeader from "../features/shopingCheckout/rightPart/ShipmentHeader";
import ShipmentItemList from "../features/shopingCheckout/rightPart/ShipmentItemList";
import DeliveryTimePicker from "../features/shopingCheckout/rightPart/DeliveryTimePicker";

// ایمپورت کامپوننت بخش چپ
import ShippingSummary from "../features/shopingCheckout/leftPart/ShippingSummary";

export default function CheckoutShipping() {
  return (
    <div
      className="min-h-screen bg-white py-4 px-4 md:px-8 "
      dir="rtl"
    >
      <div className="max-w-[1280px] mx-auto space-y-4">
        {/* 📍 ۱. هدر بالای صفحه (دقیقاً مشابه تصویر دیجی‌کالا) */}
        <header className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center justify-between relative shadow-sm">
          {/* سمت راست: دکمه بازگشت و عنوان */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HiArrowRight className="text-2xl" />
            </Link>
            <h1 className="text-base md:text-lg font-bold text-gray-800">
              آدرس و زمان ارسال
            </h1>
          </div>

          {/* وسط: لوگوی دیجی‌کالا */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              src={dglogo}
              alt="دیجی‌کالا"
              className="h-5  object-contain"
            />
          </div>

          {/* جهت حفظ تقارن (خالی) */}
          <div className="w-8"></div>
        </header>

        {/* 📦 ۲. کانتینر اصلی دو ستونه */}
        <main className="w-full flex flex-col lg:flex-row gap-4 items-start">
          {/* 🟢 سمت راست (آدرس و محتوای مرسوله) */}
          <section className="w-full lg:flex-1 flex flex-col gap-4">
            {/* آدرس */}
            <AddressSection />

            {/* بنر دیجی‌کالا پلاس (اختیاری) */}
            <DigikalaPlusBanner />

            {/* کارت مرسوله اصلی */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm space-y-6">
              <ShipmentHeader />
              <ShipmentItemList />
              <DeliveryTimePicker />
            </div>
          </section>

          {/* 🔴 سمت چپ (فاکتور و ثبت سفارش) */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="sticky top-4">
              <ShippingSummary />
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
