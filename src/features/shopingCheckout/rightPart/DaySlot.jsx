// src/features/shopingCheckout/rightPart/DaySlot.jsx
import React from "react";

const DaySlot = ({ day, date, price, discountPrice, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col items-center p-4 border rounded-2xl min-w-[110px] transition-all duration-150 shrink-0
        ${
          isSelected
            ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-100"
            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
        }`}
    >
      <div
        className={`font-bold mb-1 ${isSelected ? "text-blue-700" : "text-gray-900"}`}
      >
        {day}
      </div>
      <div
        className={`text-sm mb-3 ${isSelected ? "text-blue-600" : "text-gray-600"}`}
      >
        {date}
      </div>

      {discountPrice ? (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs text-gray-400 line-through">
            {price} تومان
          </span>
          <span
            className={`font-medium text-sm ${isSelected ? "text-blue-800" : "text-gray-800"}`}
          >
            {discountPrice} تومان
          </span>
        </div>
      ) : (
        <span
          className={`font-medium text-sm ${isSelected ? "text-blue-800" : "text-gray-800"}`}
        >
          {price} تومان
        </span>
      )}
    </button>
  );
};

export default DaySlot;
