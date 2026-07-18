// src/features/shopingCheckout/rightPart/DigikalaPlusBanner.jsx
import React from "react";
import { Zap } from "lucide-react";

const DigikalaPlusBanner = () => {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full border border-pink-200">
          <Zap className="text-pink-500" size={24} fill="currentColor" />
        </div>
        <div>
          <div className="font-bold text-gray-900">
            هر ماه ۱۰ ارسال رایگان با پلاس!
          </div>
          <div className="text-gray-600 text-sm">
            ۴ ارسال دیجی‌کالا | ۲ ارسال سوپرمارکتی | ۴ ارسال ۴۵ دقیقه‌ای
          </div>
        </div>
      </div>
      <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
        افزودن
      </button>
    </div>
  );
};

export default DigikalaPlusBanner;
