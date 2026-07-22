// src/features/shopingCheckout/rightPart/AddressSection.jsx
import React from "react";
import { ChevronLeft } from "lucide-react";
import { TfiTruck } from "react-icons/tfi";
import { useAddress } from "../../../context/AddressContext";

const AddressSection = () => {
  const { selectedAddress } = useAddress();
  // jsx
  return (
    <div
      className="border-1 border-gray-200 rounded-xl p-5 bg-white shadow-sm
     flex items-start gap-4"
    >
      <div className="flex-1 border-1 border-blue-500 rounded-xl p-4">
        <div className="flex  justify-between ">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <TfiTruck className="text-blue-400 mt-1" size={20} />
            <p> ارسال به آدرس انتخاب شده</p>
          </div>
          <button
            className="flex  items-center gap-1 text-blue-500
           text-sm font-medium hover:text-blue-600"
          >
            تغییر آدرس
            <ChevronLeft size={18} />
          </button>
        </div>

        {selectedAddress ? (
          <>
            <div className="font-medium text-gray-900 mb-1">
              {selectedAddress.address}
            </div>

            <div className="text-gray-700 text-sm">
              {selectedAddress.receiver}
            </div>
          </>
        ) : (
          <div className="text-gray-400 text-sm">
            هنوز آدرسی انتخاب نشده است
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressSection;
