// src/features/shopingCheckout/rightPart/ShipmentHeader.jsx
import React from "react";
import { Truck } from "lucide-react";

const ShipmentHeader = () => {
  return (
    <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Truck className="text-red-500" size={28} />
        <div>
          <div className="font-bold text-lg text-gray-900">ارسال عادی</div>
          <div className="text-sm text-gray-500">موجود در انبار دیجی‌کالا</div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
        ۲ کالا
      </div>
    </div>
  );
};

export default ShipmentHeader;
