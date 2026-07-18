// SellerAction
import PriceCard from "./PriceCard";
import { Plus, Minus, Trash2 } from "lucide-react";
import { toFarsiNumber } from "../../../../../utils/number";
// start
export default function SellerActions({
  product,
  cartItem,
  handleIncrease,
  handleDecrease,
  handleRemove,
  handleAddToCart,
  navigate,
}) {
  // jsx
  return (
    <div className="mt-2">
      <div className="flex flex-col items-end justify-center shrink-0">
        <div className="-mt-6">
          <PriceCard product={product} />
        </div>
      </div>

      {cartItem ? (
        <div className="flex items-center justify-between w-full gap-2">
          {/* شمارنده */}
          <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-3 py-2 bg-white shadow-sm shrink-0">
            <button
              onClick={handleIncrease}
              className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
            >
              <Plus size={16} strokeWidth={3} />
            </button>

            <span className="text-sm font-black text-slate-800 min-w-[12px] text-center">
              {toFarsiNumber(cartItem.qty)}
            </span>

            {Number(cartItem.qty) === 1 ? (
              <button
                onClick={handleRemove}
                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <Trash2 size={16} />
              </button>
            ) : (
              <button
                onClick={handleDecrease}
                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <Minus size={16} strokeWidth={3} />
              </button>
            )}
          </div>

          {/* متن کنار شمارنده */}
          <div className="flex flex-col items-start justify-center flex-1">
            <span className="text-[16px] font-bold text-gray-800">
              در سبد شما
            </span>

            <button
              onClick={() => navigate("/cart")}
              className="text-[10px] font-medium text-cyan-600 mt-0.5 text-right cursor-pointer"
            >
              <span className="text-gray-800">مشاهده در</span> سبد خرید
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="w-full h-12 bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold rounded-xl shadow-sm transition active:scale-[0.98] cursor-pointer"
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
}
