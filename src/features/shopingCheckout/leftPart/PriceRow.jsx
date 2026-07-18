// src/features/shopingCheckout/leftPart/PriceRow.jsx
import React from "react";

const PriceRow = ({
  label,
  value,
  labelClassName = "",
  valueClassName = "",
  icon = null,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <div
        className={`flex items-center gap-1.5 text-gray-600 ${labelClassName}`}
      >
        {label}
        {icon}
      </div>
      <div className={`text-gray-800 font-medium ${valueClassName} text-left`}>
        {value}
      </div>
    </div>
  );
};

export default PriceRow;
