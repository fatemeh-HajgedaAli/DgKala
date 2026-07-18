// src/features/product/components/ProductAction.jsx
import { useNavigate } from "react-router-dom";
import SellerCard from "./SellerCard";
// icons
import { BiCartAdd } from "react-icons/bi";
import { Plus, Minus, Trash2 } from "lucide-react";

// context
import { useCart } from "../../../../context/CartContext";
import { useMiniCart } from "../../../../context/MiniCartContext";
// utilise
import { toFarsiNumber } from "../../../../utils/number";
import { formatPrice } from "../../../../utils/price";

export default function ProductAction({ product }) {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { setIsOpen } = useMiniCart();

  if (!product) return null;
  const id = product.id || product._id || product.productId;

  // ۱. بررسی لحظه‌ای وجود کالا در سبد خرید
  const cartItem = state.items.find(
    (item) => (item.id || item._id || item.productId) === id,
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    setIsOpen(true);
  };

  const handleIncrease = () => dispatch({ type: "INCREASE_QTY", payload: id });
  const handleDecrease = () => dispatch({ type: "DECREASE_QTY", payload: id });
  const handleRemove = () => dispatch({ type: "REMOVE_ITEM", payload: id });

  return (
    <>
      {/* ================= نسخه دسکتاپ ================= */}
      <div
        className="hidden lg:flex flex-col bg-gray-50/70 border border-gray-200 rounded-2xl p-5 shadow-sm w-full"
        dir="rtl"
      >
        {/* پاس دادن متغیرها و متدها به عنوان Props */}
        <SellerCard
          product={product}
          cartItem={cartItem}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleRemove={handleRemove}
          handleAddToCart={handleAddToCart}
          navigate={navigate}
        />
      </div>

      {/* ================= mobile-Responsive ================= */}
      <div
        className="lg:hidden fixed bottom-0 right-0 left-0 bg-white border-t border-gray-200 z-50 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between gap-4"
        dir="rtl"
      >
        <div className="flex-1">
          {cartItem ? (
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-3 py-1.5 bg-white shadow-sm shrink-0">
                <button onClick={handleIncrease} className="text-red-500 p-0.5">
                  <Plus size={16} strokeWidth={3} />
                </button>

                <span className="text-sm font-black text-slate-800 min-w-[12px] text-center">
                  {toFarsiNumber(cartItem.qty)}
                </span>

                {Number(cartItem.qty) === 1 ? (
                  <button onClick={handleRemove} className="text-red-500 p-0.5">
                    <Trash2 size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleDecrease}
                    className="text-red-500 p-0.5"
                  >
                    <Minus size={16} strokeWidth={3} />
                  </button>
                )}
              </div>

              <button
                onClick={() => navigate("/cart")}
                className="text-[11px] font-bold text-cyan-600 bg-cyan-50 px-2 py-2 rounded-lg"
              >
                مشاهده سبد
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full h-12 bg-rose-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <BiCartAdd size={20} />
              <span>افزودن به سبد خرید</span>
            </button>
          )}
        </div>

        <div className="flex flex-col items-end justify-center shrink-0">
          <span className="text-sm font-black text-gray-900">
            {formatPrice(product?.pricing?.finalPrice || 0)}
            <span className="text-[10px] text-gray-500 font-normal mr-1">
              تومان
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
