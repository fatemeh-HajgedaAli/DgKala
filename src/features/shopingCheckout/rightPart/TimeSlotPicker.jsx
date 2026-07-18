// src/features/shopingCheckout/rightPart/TimeSlotPicker.jsx
import React from "react";
import { Clock } from "lucide-react";

const TimeSlotPicker = ({ selectedDayId }) => {
  // این اطلاعات باید بر اساس selectedDayId از API بیاد
  const timeSlots = [{ id: 1, time: "ساعت ۱۰ تا ۲۳", available: true }];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center justify-between">
      <div className="flex items-center gap-3 text-gray-700">
        <Clock size={22} className="text-gray-400" />
        <span className="font-medium">{timeSlots[0].time}</span>
      </div>
      <div className="flex items-center gap-3">
        {timeSlots[0].available && (
          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">
            در دسترس
          </span>
        )}
        {/* این رادیو باتن باید هندل بشه */}
        <input
          type="radio"
          name="timeSlot"
          className="w-5 h-5 accent-blue-600 cursor-pointer"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default TimeSlotPicker;
