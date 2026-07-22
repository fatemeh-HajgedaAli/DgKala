// src/pages/CheckoutPaymentPage.jsx
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import dglogo from "../assets/logos/dg-logo.svg";
import PaymentMethodPicker from "../features/faktorPart/paymentMethods/PaymentMethodPicker";
import PaymentSummary from "../features/faktorPart/leftPart/PaymentSummary";
// start
export default function CheckoutPaymentPage() {
  // jsx
  return (
    <div className="min-h-screen bg-white py-4 px-4 md:px-8" dir="rtl">
      <div className="max-w-[1280px] mx-auto space-y-4">
        {/* هدر بالای صفحه */}
        <header className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center justify-between relative shadow-sm">
          <div className="flex items-center gap-3">
            <Link
              to="/checkout/shipping"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HiArrowRight className="text-2xl" />
            </Link>
            <h1 className="text-base md:text-lg font-bold text-gray-800">
              پرداخت
            </h1>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={dglogo} alt="دیجی‌کالا" className="h-5 object-contain" />
          </div>

          <div className="w-8" />
        </header>

        {/* بدنه اصلی */}
        <main className="w-full flex flex-col lg:flex-row gap-4 items-start">
          {/* سمت راست: روش‌های پرداخت */}
          <section className="w-full lg:flex-1">
            <PaymentMethodPicker />
          </section>

          {/* سمت چپ: فاکتور نهایی */}
          <aside className="w-full lg:w-[320px] shrink-0 sticky top-4">
            <PaymentSummary />
          </aside>
        </main>
      </div>
    </div>
  );
}
