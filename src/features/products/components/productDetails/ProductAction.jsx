// product -Actions

import { Link } from "react-router";
import { formatPrice } from "../../../../utils/price";
import { BiCartAdd } from "react-icons/bi";
import SellerCard from "./SellerCard";

// start
export default function ProductAction({ product }) {
  // jsx
  return (
    <>
      <div
        className="bg-white h-[430px] border-t-8 border-gray-200 lg:flex lg:flex-col
         lg:border-2 lg:border-gray-300 lg:rounded-xl p-5 lg:shadow bg-gray-100"
      >
        <SellerCard product={product} />
        {/* Desktop Button */}
        <div className="hidden lg:flex items-center">
          <button
            className="w-full h-15 shadow-sm bg-rose-500 rounded-xl
    hover:bg-red-600 text-white text-xl font-bold py-3 cursor-pointer"
          >
            افزودن به سبد خرید
          </button>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden justify-center">
          <Link
            to="/cart"
            className="bg-rose-500 text-white p-3 rounded-full shadow"
          >
            <BiCartAdd size={28} />
          </Link>
        </div>
      </div>
    </>
  );
}
// finish
