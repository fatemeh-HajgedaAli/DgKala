// CartPreview.jsx
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/price";
import { toFarsiNumber } from "../../utils/number";
import handBasket from "../../assets/logos/hand-basket.svg";

// Header
function CartHeader({ count }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
      <span className="font-bold text-sm text-slate-800">سبد خرید شما</span>
      <span className="text-xs text-slate-500">
        {toFarsiNumber(count)} کالا
      </span>
    </div>
  );
}

// Cart Item
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  if (!item) return null;
  const id = item.id || item._id || item.productId;

  return (
    <div dir="rtl" className="flex gap-3 py-3 border-b border-slate-100">
      {/* Image */}
      <div className="w-16 h-16 rounded-lg border border-slate-100 p-1 flex items-center justify-center shrink-0">
        <img
          src={item.images?.[0] || "/placeholder.png"}
          alt={item.title || "product"}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <p className="text-xs font-bold text-slate-700 line-clamp-1">
          {item.title}
        </p>

        <div className="flex items-center justify-between mt-2">
          {/* Counter */}
          <div className="flex items-center gap-3 border border-slate-200 rounded-md px-2 py-1">
            <button
              onClick={() => onIncrease(id)}
              className="text-red-500 font-black"
            >
              +
            </button>
            <span className="text-xs font-black">
              {toFarsiNumber(item.qty)}
            </span>
            {Number(item.qty) === 1 ? (
              <button
                onClick={() => onRemove(id)}
                className="text-red-500 text-sm"
              >
                🗑
              </button>
            ) : (
              <button
                onClick={() => onDecrease(id)}
                className="text-red-500 font-black"
              >
                -
              </button>
            )}
          </div>

          {/* Price */}
          <div className="text-left">
            {item.pricing?.discountPercent > 0 && (
              <div className="text-[10px] text-slate-400 line-through">
                {formatPrice(item.pricing.price)}
              </div>
            )}
            <div className="text-xs font-black text-slate-800">
              {formatPrice(item.pricing?.finalPrice || 0)}
              <span className="text-[10px] text-slate-500 mr-1 font-normal">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer
function CartFooter({ totalPrice, closeCart }) {
  return (
    <div className="border-t border-slate-100 p-3 flex items-center justify-between bg-white">
      <div>
        <p className="text-[10px] text-slate-400">مبلغ قابل پرداخت</p>
        <div className="font-black text-sm">
          {formatPrice(totalPrice)}
          <span className="text-xs text-slate-500 mr-1 font-normal">تومان</span>
        </div>
      </div>
      <Link
        to="/cart"
        onClick={closeCart}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-xs font-bold"
      >
        ثبت سفارش
      </Link>
    </div>
  );
}

// Main Component
export default function CartPreview({ closeCart }) {
  const { state, dispatch } = useCart();

  const handleIncrease = (id) =>
    dispatch({ type: "INCREASE_QTY", payload: id });
  const handleDecrease = (id) =>
    dispatch({ type: "DECREASE_QTY", payload: id });
  const handleRemove = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  const totalPrice = state.items.reduce(
    (sum, item) => sum + (item.pricing?.finalPrice || 0) * item.qty,
    0,
  );

  return (
    <div
      dir="rtl"
      className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden"
    >
      <CartHeader count={state.items.length} />

      <div className="max-h-[260px] overflow-y-auto px-3">
        {state.items.length === 0 ? (
          <div className="py-8 text-center">
            <img
              src={handBasket}
              alt="empty"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="text-sm font-bold text-slate-700">
              سبد دیجی‌کالایی شما خالی است!
            </h3>
          </div>
        ) : (
          state.items.map((item) => (
            <CartItem
              key={item.id || item._id || item.productId}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          ))
        )}
      </div>

      {state.items.length > 0 && (
        <CartFooter totalPrice={totalPrice} closeCart={closeCart} />
      )}
    </div>
  );
}
