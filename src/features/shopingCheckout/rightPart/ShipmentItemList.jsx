// src/features/shopingCheckout/rightPart/ShipmentItemList.jsx

import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../../../context/CartContext";

export default function ShipmentItemList() {
  const { state, dispatch } = useCart();

  const items = state.items;

  if (items.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-gray-400">
        سبد خرید شما خالی است
      </div>
    );
  }

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-3 w-[120px]"
        >
          {/* Product Image */}
          <div className="w-24 h-24 p-2 border border-gray-100 rounded-xl">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Quantity Controller */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2 py-1 shadow-inner bg-gray-50">
            {/* Increase */}
            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              className="text-red-500 hover:bg-red-50 p-1 rounded-full transition"
            >
              <Plus size={16} />
            </button>

            {/* Quantity */}
            <span className="text-sm font-bold text-gray-800">{item.qty}</span>

            {/* Decrease / Remove */}
            <button
              type="button"
              onClick={() => {
                if (item.qty > 1) {
                  decreaseQuantity(item.id);
                } else {
                  removeItem(item.id);
                }
              }}
              className="text-red-500 hover:bg-red-50 p-1 rounded-full transition"
            >
              {item.qty > 1 ? <Minus size={16} /> : <Trash2 size={16} />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
