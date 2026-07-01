// main
import SelectedDiscountItems from "./SelectedDiscountItems";
import { BiSolidDiscount } from "react-icons/bi";
import { selectedDiscountData } from "../../../data/componentData/selectedDiscpount.data";

export default function SelectedDiscountProducts() {
  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden mx-3 mt-5 bg-white rounded-2xl border border-gray-300 p-4">
        <p className="flex justify-center items-center gap-2 text-lg font-medium mb-5">
          <BiSolidDiscount className="text-red-500 text-2xl" />
          منتخب محصولات تخفیف و حراج
        </p>

        <div className="flex overflow-x-auto gap-3 hide-scrollbar">
          {selectedDiscountData.map((item) => (
            <div
              key={item.id}
              className="min-w-[170px] shrink-0 bg-white border border-gray-100 rounded-xl"
            >
              <SelectedDiscountItems item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block rounded-2xl overflow-hidden border border-gray-300 mx-5 mt-5">
        <p className="flex justify-center items-center text-2xl py-10 gap-3">
          <BiSolidDiscount className="text-red-500" />
          منتخب محصولات تخفیف و حراج
        </p>

        <div className="grid grid-cols-6 grid-rows-3 gap-px bg-gray-200">
          {selectedDiscountData.map((item) => (
            <div key={item.id} className="bg-white">
              <SelectedDiscountItems item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
