import { PiStarFourBold } from "react-icons/pi";
import { FiChevronLeft } from "react-icons/fi";

export default function PlusBenefits() {
  return (
    <div className="flex justify-start items-center gap-3 px-4 py-1">
      <div className="p-2 rounded-full bg-gray-100 text-purple-600 text-lg">
        <PiStarFourBold size={18} />
      </div>

      <div className="flex justify-between items-center grow py-4 border-b border-gray-100">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-bold text-gray-800">
            ویژه اعضای پلاس
          </span>

          <span className="text-[11px] text-gray-500">
            ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)
          </span>
        </div>

        <FiChevronLeft className="text-gray-400" />
      </div>
    </div>
  );
}