import { FaMoneyCheck } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

export default function DigiclubItem() {
  return (
    <div className="flex justify-start items-center gap-3 px-4 py-1">
      <div className="p-2 rounded-full bg-gray-100 text-amber-500 text-lg">
        <FaMoneyCheck size={18} />
      </div>

      <div className="flex justify-between items-center grow py-4">
        <span className="text-xs font-bold text-gray-800">
          ۱۵۰ امتیاز دیجی‌کلاب دریافت می‌کنید
        </span>

        <FiChevronLeft className="text-gray-400" />
      </div>
    </div>
  );
}