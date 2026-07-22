import { useCart } from "../../../context/CartContext";

export default function AddToCartButton({ product }) {
  const { dispatch } = useCart();

  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD_TO_CART",
          payload: product,
        })
      }
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      افزودن به سبد
    </button>
  );
}
