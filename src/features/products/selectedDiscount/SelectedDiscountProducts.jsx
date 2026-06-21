// main
import SelectedDiscountItems from "./SelectedDiscountItems";
import { BiSolidDiscount } from "react-icons/bi";
import { selectedDiscountData } from "../../../data/selectedDiscpount.data";

export default function SelectedDiscountProducts() {
  return (
    <>
      <div className=" rounded-2xl overflow-hidden border-1 border-gray-300 mx-5 ">
        <p className="flex justify-center items-center text-2xl py-10 gap-3">
          {" "}
          <BiSolidDiscount className="text-red-500" />
          منتخب محصولات تخفیف و حراج
        </p>
        <div className="grid grid-cols-6 grid-rows-3 gap-px bg-gray-200 ">
          {selectedDiscountData.map((item) => (
            <div key={item.id} className=" bg-white  ">
              <SelectedDiscountItems item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
