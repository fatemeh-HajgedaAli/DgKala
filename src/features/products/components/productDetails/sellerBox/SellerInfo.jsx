// sellerInfo
import { BsShop } from "react-icons/bs";
import { toFarsiNumber } from "../../../../../utils/number";
// start
export default function SellerInfo({ seller }) {
//   jsx
    return (
    <>
      <h3 className="font-bold text-sm text-gray-800">فروشنده</h3>

      <div className="flex items-center gap-3 text-xs">
        <BsShop className="text-base text-gray-500" />
        <span className="font-medium">{seller?.name || "دیجی‌کالا"}</span>
      </div>

      <div className="flex gap-2 border-b border-gray-300 pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-emerald-500 font-bold">
            {toFarsiNumber(seller?.satisfaction || "۹۱.۶٪")}
          </span>
          <span className="text-gray-400">رضایت از کالا</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs border-r-2 border-gray-300 pr-2">
          <span className="text-gray-400">عملکرد</span>
          <span className="font-bold text-emerald-500">
            {seller?.performance || "عالی"}
          </span>
        </div>
      </div>
    </>
  );
}
