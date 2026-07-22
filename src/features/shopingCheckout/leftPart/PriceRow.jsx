// src/features/shopingCheckout/leftPart/PriceRow.jsx
import React from "react";

const PriceRow = ({
  label,
  value,
  oldValue = null,
  labelClassName = "text-gray-600",
  valueClassName = "text-gray-800 font-medium",
  icon = null,
  showBorder = false,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 text-sm ${
        showBorder ? "border-b border-gray-100 pb-3" : ""
      }`}
    >
      {/* Label */}
      <div className={`flex items-center gap-1.5 ${labelClassName}`}>
        {icon}
        {label && <span>{label}</span>}
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 text-left shrink-0">
        {/* قیمت اصلی (خط‌خورده) */}
        {oldValue !== null && oldValue !== undefined && oldValue !== "" && (
          <span className="text-gray-400 text-xs line-through decoration-gray-400 decoration-1">
            {oldValue}
          </span>
        )}

        {/* قیمت فعلی */}
        <span className={valueClassName}>{value}</span>
      </div>
    </div>
  );
};

export default PriceRow;
