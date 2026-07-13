import { BiCartAdd } from "react-icons/bi";
import SellerCard from "./SellerCard";
import { useCart } from "../../../../context/CartContext";
import { useMiniCart } from "../../../../context/MiniCartContext";

export default function ProductAction({ product }) {
  const { dispatch } = useCart();
  const { setIsOpen } = useMiniCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    setIsOpen(true);
  };

  return (
    <>
      {/* نسخه دسکتاپ: باکس سایدبار سمت چپ */}
      <div className="hidden lg:flex flex-col bg-gray-50/70 border border-gray-200 rounded-2xl p-5 shadow-sm w-full">
        {/* اطلاعات فروشنده و قیمت */}
        <SellerCard product={product} />

        {/* دکمه خرید دسکتاپ */}
        <button
          onClick={addToCart}
          className="w-full h-12 mt-4 bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold rounded-xl shadow-sm transition active:scale-[0.98] cursor-pointer"
        >
          افزودن به سبد خرید
        </button>
      </div>

      {/* نسخه موبایل: باکس چسبان خرید پایین صفحه گوشی */}
      <div className="lg:hidden fixed bottom-0 right-0 left-0 bg-white border-t border-gray-200 z-50 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between gap-4">
        <button
          onClick={addToCart}
          className="flex-1 h-12 bg-rose-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2"
        >
          <BiCartAdd size={20} />
          افزودن به سبد خرید
        </button>

        {/* نمایش قیمت کوچک در سمت چپ نوار موبایل */}
        <div className="flex flex-col items-end justify-center">
          <span className="text-xs font-bold text-gray-800">
            {product?.pricing?.finalPrice?.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </>
  );
}
