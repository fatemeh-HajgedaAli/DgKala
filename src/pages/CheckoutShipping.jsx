import React from "react";
// ایمپورت کامپوننت‌های بخش راست
import AddressSection from "../features/shopingCheckout/rightPart/AddressSection";
import DigikalaPlusBanner from "../features/shopingCheckout/rightPart/DigikalaPlusBanner";
import ShipmentHeader from "../features/shopingCheckout/rightPart/ShipmentHeader";
import ShipmentItemList from "../features/shopingCheckout/rightPart/ShipmentItemList";
import DeliveryTimePicker from "../features/shopingCheckout/rightPart/DeliveryTimePicker";

// ایمپورت کامپوننت بخش چپ
import ShippingSummary from "../features/shopingCheckout/leftPart/ShippingSummary";
// stat
export default function CheckoutShipping() {
  // jsx
  return (
    <div
      className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center"
      dir="rtl"
    >
      {/* کانتینر اصلی با چیدمان دو ستونه (سمت راست محتوا، سمت چپ فاکتور) */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 mt-4">
        {/* بخش سمت راست (محتوای اصلی ارسال) */}
        <div className="flex-1 flex flex-col gap-4">
          <AddressSection />
          <DigikalaPlusBanner />

          {/* باکس مرسوله عادی */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
            <ShipmentHeader />
            <ShipmentItemList />
            <DeliveryTimePicker />
          </div>
        </div>

        {/* بخش سمت چپ (سایدبار قیمت و فاکتور) */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="sticky top-6">
            <ShippingSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
// finish
