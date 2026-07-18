// info
import DeliveryTruck from "../../../../../assets/logos/free-delivery-car.svg";
import { HiOutlineSparkles } from "react-icons/hi2";
// start
export default function ShippingInfo({ shipping }) {
  if (!shipping?.fastDelivery) return null;
// jsx
  return (
    <div className="flex items-center justify-between p-2.5 bg-blue-50/30 rounded-xl border border-blue-100/50 text-xs">
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1 text-blue-600 font-bold">
          <HiOutlineSparkles size={14} />
          ارسال رایگان سفارش
        </p>

        <p className="text-gray-500 font-light text-[11px]">
          ارسال امروز برای کاربران ویژه
        </p>
      </div>

      <img
        src={DeliveryTruck}
        alt="delivery"
        className="w-12 h-12 object-contain"
      />
    </div>
  );
}
