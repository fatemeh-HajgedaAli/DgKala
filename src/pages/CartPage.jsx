import { useCart } from "../context/CartContext";
import EmptyCart from "../features/cartPart/EmtyCart";
import CartItem from "../features/cartPart/CartItem";
import CartSummary from "../features/cartPart/CartSummary";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/products")}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaArrowRight />
      </button>

      {state.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2 border-1 border-gray-200 rounded-2xl mx-8 my-2">
           
            {state.items.map((item) => (
              <CartItem
                key={item.id || item._id}
                item={item}
                onIncrease={(id) =>
                  dispatch({
                    type: "INCREASE_QTY",
                    payload: id,
                  })
                }
                onDecrease={(id) =>
                  dispatch({
                    type: "DECREASE_QTY",
                    payload: id,
                  })
                }
                onRemove={(id) =>
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: id,
                  })
                }
              />
            ))}
          </div>

          <div >
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
