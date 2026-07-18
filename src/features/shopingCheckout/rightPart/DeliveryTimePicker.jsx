// src/features/shopingCheckout/rightPart/DeliveryTimePicker.jsx
import React, { useState } from "react";
import DaySlot from "./DaySlot";
import TimeSlotPicker from "./TimeSlotPicker";

// داده‌های نمونه برای روزها
const days = [
  { id: 1, day: "فردا", date: "۲۸ تیر", price: "۱۵۶,۰۰۰" },
  {
    id: 2,
    day: "دوشنبه",
    date: "۲۹ تیر",
    price: "۱۵۶,۰۰۰",
    discountPrice: "۱۴۹,۰۰۰",
  }, // مثال با تخفیف
  { id: 3, day: "سه شنبه", date: "۳۰ تیر", price: "۱۴۰,۰۰۰" },
  // ... بقیه روزها
];

const DeliveryTimePicker = () => {
  const [selectedDayId, setSelectedDayId] = useState(1); // استیت برای روز انتخاب شده

  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="text-sm text-gray-600 mb-1">زمان انتخاب نشده</div>
      <div className="text-gray-900 font-bold mb-5">زمان ارسال</div>

      {/* اسلایدر افقی روزها */}
      <div className="flex gap-3 overflow-x-auto pb-4 -mb-4 scrollbar-thin scrollbar-thumb-gray-200">
        {days.map((day) => (
          <DaySlot
            key={day.id}
            {...day}
            isSelected={day.id === selectedDayId}
            onSelect={() => setSelectedDayId(day.id)}
          />
        ))}
      </div>

      {/* بخش انتخاب ساعت برای روز انتخاب شده */}
      <div className="mt-8">
        <TimeSlotPicker selectedDayId={selectedDayId} />
      </div>
    </div>
  );
};

export default DeliveryTimePicker;
