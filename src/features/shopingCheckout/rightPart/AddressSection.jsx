// src/features/shopingCheckout/rightPart/AddressSection.jsx
import React from "react";
import { MapPin, ChevronLeft, Truck } from "lucide-react";

const AddressSection = () => {
  // این اطلاعات باید از استیت یا API بیاد
  const address = "خ. جلال رو به روی پارک شادمان پلاک ۱۵۱";
  const receiver = "امیرحسین";

  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm flex items-start gap-4">
      <MapPin className="text-gray-400 mt-1" size={24} />
      <div className="flex-1">
        <div className="text-gray-500 text-sm mb-1">
          ارسال به آدرس انتخاب شده
        </div>
        <div className="font-medium text-gray-900 mb-1">{address}</div>
        <div className="text-gray-700 text-sm">{receiver}</div>
      </div>
      <button className="flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-600">
        تغییر آدرس
        <ChevronLeft size={18} />
      </button>
    </div>
  );
};

export default AddressSection;
