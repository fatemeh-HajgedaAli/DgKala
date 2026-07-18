// src/features/shopingCheckout/rightPart/ShipmentItemList.jsx
import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

// داده‌های نمونه برای کالاها
const items = [
  {
    id: 1,
    name: "سرم مو سریتا مدل Keratin حجم ۱۰۰ میلی لیتر",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/b6b5d9...jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    count: 1,
  },
  {
    id: 2,
    name: "کرم ضد آفتاب لافارر مدل SPF50 مناسب پوست های چرب",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/120021...jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    count: 1,
  },
];

const ShipmentItemList = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-3 w-[120px]"
        >
          <div className="w-24 h-24 p-2 border border-gray-100 rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* کنترل‌کننده تعداد */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2 py-1 shadow-inner bg-gray-50">
            <button className="text-red-500 hover:bg-red-50 p-1 rounded-full">
              <Plus size={16} />
            </button>
            <span className="text-sm font-bold text-gray-800">
              {item.count}
            </span>
            <button className="text-red-500 hover:bg-red-50 p-1 rounded-full">
              {item.count > 1 ? <Minus size={16} /> : <Trash2 size={16} />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShipmentItemList;
