import { TbTruckDelivery } from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";

export default function ShippingItem() {
  return (
    <div className="flex justify-start items-center gap-3 px-4 py-1">
      <div className="p-2 rounded-full bg-gray-100 text-gray-500 text-lg">
        <TbTruckDelivery size={18} />
      </div>

      <div className="flex justify-between items-center grow py-4 border-b border-gray-100">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-bold text-gray-800">
            روش و هزینه ارسال
          </span>

          <span className="text-[11px] text-gray-500 flex items-center gap-1">
            <span className="text-cyan-500">Express</span>
            توسط دیجی‌کالا • وابسته به سبد
          </span>
        </div>

        <FiChevronLeft className="text-gray-400" />
      </div>
    </div>
  );
}