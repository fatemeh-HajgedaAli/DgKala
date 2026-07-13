import { FiChevronLeft } from "react-icons/fi";
import { toFarsiNumber } from "../../../../../utils/number";
import DigiLogo from "../../../../../assets/logos/smile-favicon.webp";

export default function SellerInfo({ seller }) {
  return (
    <div className="flex justify-start items-center gap-3 px-4 py-1 mt-2">
      <div className="relative flex p-2 rounded-full bg-red-500 text-white w-9 h-9 items-center justify-center">
        <img
          src={DigiLogo}
          alt="DigiLogo"
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-1 grow flex-col py-3 border-b border-gray-100 w-full">
        <div className="flex justify-start items-center w-full gap-2">
          <span className="text-xs font-bold text-gray-900">
            {seller?.name || "دیجی‌کالا"}
          </span>

          <FiChevronLeft className="text-gray-400" />

          <span className="rounded-md text-[10px] font-bold text-cyan-600 px-1.5 py-0.5 bg-cyan-50">
            رسمی
          </span>

          <span className="rounded-md text-[10px] font-bold text-amber-600 px-1.5 py-0.5 bg-amber-50">
            منتخب
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <div className="text-[11px] text-gray-500 border border-gray-100 rounded-lg pr-2 pl-1 py-0.5 flex gap-1.5 items-center">
            رضایت از کالا

            <span className="text-white text-[10px] font-bold rounded px-1.5 py-0.2 bg-emerald-500">
              {toFarsiNumber(seller?.satisfaction || "۹۳")}%
            </span>
          </div>

          <div className="text-[11px] text-gray-500 border border-gray-100 rounded-lg pr-2 pl-1 py-0.5 flex gap-1.5 items-center">
            عملکرد

            <span className="text-white text-[10px] font-bold rounded px-1.5 py-0.2 bg-emerald-500">
              {seller?.performance || "عالی"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}