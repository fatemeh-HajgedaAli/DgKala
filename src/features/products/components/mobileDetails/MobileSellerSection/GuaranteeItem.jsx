import { BsShieldCheck } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";

export default function GuaranteeItem({ guarantee }) {
  return (
    <div className="flex justify-start items-center gap-3 px-4 py-1">
      <div className="p-2 rounded-full bg-gray-100 text-gray-500 text-lg">
        <BsShieldCheck size={18} />
      </div>

      <div className="flex justify-between items-center grow py-4 border-b border-gray-100">
        <span className="text-xs font-bold text-gray-800">
          {guarantee || "گارانتی ۱۸ ماهه شرکتی"}
        </span>

        <FiChevronLeft className="text-gray-400" />
      </div>
    </div>
  );
}