import { FiChevronLeft } from "react-icons/fi";

export default function SellerHeader() {
  return (
    <div className="w-full flex justify-between items-center pt-5 px-4">
      <span className="text-sm font-bold text-gray-800">
        فروشنده
      </span>

      <button className="text-xs font-bold text-gray-500 flex items-center gap-0.5">
        انتخاب از ۲ فروشنده دیگر
        <FiChevronLeft className="text-base" />
      </button>
    </div>
  );
}