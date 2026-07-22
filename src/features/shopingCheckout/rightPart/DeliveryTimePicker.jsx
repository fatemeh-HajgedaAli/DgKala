// src/features/shopingCheckout/rightPart/DeliveryTimePicker.jsx
import React, { useState, useEffect } from "react";
import DaySlot from "./DaySlot";
import TimeSlotPicker from "./TimeSlotPicker";

const DAYS_DATA = [
  { id: 1, day: "فردا", date: "۲۸ تیر", price: 156000 },
  {
    id: 2,
    day: "دوشنبه",
    date: "۲۹ تیر",
    price: 156000,
    discountPrice: 149000,
  },
  { id: 3, day: "سه شنبه", date: "۳۰ تیر", price: 140000 },
];

const DeliveryTimePicker = ({ onSelectDeliveryDay }) => {
  const [selectedDayId, setSelectedDayId] = useState(1);

  const selectedDay = DAYS_DATA.find((d) => d.id === selectedDayId);

  useEffect(() => {
    if (selectedDay && onSelectDeliveryDay) {
      onSelectDeliveryDay(selectedDay);
    }
  }, [selectedDayId]);

  const handleSelectDay = (id) => {
    setSelectedDayId(id);
  };

  return (
    <div className="border-t border-gray-100 pt-6">
      <p className="text-sm text-gray-500 mb-1">
        {selectedDay
          ? `${selectedDay.day} ${selectedDay.date}`
          : "زمان انتخاب نشده"}
      </p>
      <h3 className="text-gray-900 font-bold text-lg mb-5">زمان ارسال</h3>

      <div className="flex gap-3 overflow-x-auto p-1 -m-1 no-scrollbar">
        {DAYS_DATA.map((day) => (
          <DaySlot
            key={day.id}
            {...day}
            price={day.price.toLocaleString("fa-IR")}
            discountPrice={day.discountPrice?.toLocaleString("fa-IR")}
            isSelected={day.id === selectedDayId}
            onSelect={() => handleSelectDay(day.id)}
          />
        ))}
      </div>

      <div className="mt-8">
        <TimeSlotPicker selectedDayId={selectedDayId} />
      </div>
    </div>
  );
};

export default DeliveryTimePicker;
