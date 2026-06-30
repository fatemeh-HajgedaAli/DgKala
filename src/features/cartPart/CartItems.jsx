import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/price";

export default function CartItems() {
  const { state, dispatch } = useCart();

  return (
    <div className="space-y-4">
      {state.items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border rounded-xl p-4 bg-white shadow-sm"
        >
          <div>
            <h3 className="font-bold text-lg">{item.title}</h3>

            <div className="flex items-center gap-2 mt-2">
              {item.pricing.discountPercent > 0 && (
                <>
                  <p className="text-sm text-gray-400 line-through">
                    {formatPrice(item.pricing.price)} تومان
                  </p>

                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {item.pricing.discountPercent}%
                  </span>
                </>
              )}
            </div>

            <p className="font-bold text-rose-500">
              {formatPrice(item.pricing.finalPrice)} تومان
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QTY",
                  payload: item.id,
                })
              }
              className="w-8 h-8 rounded bg-gray-200"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QTY",
                  payload: item.id,
                })
              }
              className="w-8 h-8 rounded bg-gray-200"
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
              className="text-red-500"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
