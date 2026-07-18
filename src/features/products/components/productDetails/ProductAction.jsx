import { useNavigate } from "react-router-dom";
import SellerCard from "./sellerBox/SellerCard";
import MobileAddToCart from "../mobileDetails/mobilePart/MobileAddToCart";

import { useCart } from "../../../../context/CartContext";
import { useMiniCart } from "../../../../context/MiniCartContext";

export default function ProductAction({ product }) {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { setIsOpen } = useMiniCart();

  if (!product) return null;

  const id = product.id || product._id || product.productId;

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

  const handleIncrease = () =>
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });

  const handleDecrease = () =>
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });

  const handleRemove = () =>
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });

  return (
    <>
      {/* Desktop */}
      <div
        className="
          hidden
          lg:flex
          flex-col
          bg-gray-50/70
          border
          border-gray-200
          rounded-2xl
          p-5
          shadow-sm
          w-full
        "
        dir="rtl"
      >
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

      {/* Mobile */}
      <MobileAddToCart
        product={product}
        cartItem={cartItem}
        handleAddToCart={handleAddToCart}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
        navigate={navigate}
      />
    </>
  );
}
