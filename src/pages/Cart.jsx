import { useCart } from "../context/CartContext";

export default function Cart() {
  const { state, dispatch } = useCart();

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">سبد خرید</h1>

      {state.items.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="flex justify-between border p-3 mb-3">
              <div>
                <h3>{item.title}</h3>
                <p>{item.price.toLocaleString()}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item.id })
                  }
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE_QTY", payload: item.id })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="text-red-500"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}

          <div className="mt-5 font-bold">
            Total: {totalPrice.toLocaleString()} تومان
          </div>
        </>
      )}
    </div>
  );
}
