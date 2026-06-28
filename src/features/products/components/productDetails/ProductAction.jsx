import { formatPrice } from "../../../../utils/price";
import PriceCard from "./PriceCard";
import SellerCard from "./SellerCard";

// start
export default function ProductAction({ product }) {
  // jsx
  return (
    <>
      <div
        className="bg-white border-t-8 border-gray-200 lg:flex lg:flex-col lg:border-2 
      lg:border-gray-300 lg:rounded-xl p-5 lg:shadow bg-gray-100"
      >
        <SellerCard product={product} />
        <PriceCard product={product} />

        <button
          className="hidden lg:flex w-full mt-5 bg-green-600 rounded-xl
         hover:bg-green-700 text-white text-sm py-3 justify-center"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </>
  );
}
// finish
