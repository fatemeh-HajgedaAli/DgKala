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
// modal cart-box
    setIsOpen(true);
  };

  return (
    <div className="bg-white h-[430px] border-t-8 border-gray-200 lg:flex lg:flex-col lg:border-2 lg:border-gray-300 lg:rounded-xl p-5 lg:shadow bg-gray-100">
      {/* Seller info */}
      <SellerCard product={product} />

      {/* Desktop button */}
      <div className="hidden lg:flex items-center mt-4">
        <button
          onClick={addToCart}
          className="w-full h-14 shadow-sm bg-rose-500 rounded-xl hover:bg-red-600 text-white text-xl font-bold cursor-pointer"
        >
          افزودن به سبد خرید
        </button>
      </div>

      {/* Mobile button */}
      <div className="flex lg:hidden justify-center mt-4">
        <button
          onClick={addToCart}
          className="bg-rose-500 text-white p-3 rounded-full shadow hover:bg-red-600 transition"
        >
          <BiCartAdd size={28} />
        </button>
      </div>
    </div>
  );
}
