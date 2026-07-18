// src/features/shopingCheckout/leftPart/CheckoutButton.jsx
import React from "react";

const CheckoutButton = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center gap-2
        ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg"
        }`}
    >
      {text}
    </button>
  );
};

export default CheckoutButton;
