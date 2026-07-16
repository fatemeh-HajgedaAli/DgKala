// main-cart-Page
import { useCart } from "../context/CartContext";
// component
import EmptyCart from "../features/cartPart/EmtyCart";
import CartItems from "../features/cartPart/CartItems";
import CartSummary from "../features/cartPart/CartSummary";
// icons
import { FaArrowRight } from "react-icons/fa";
// cartNavigate
import { useNavigate } from "react-router-dom";
export default function CartPage() {
  const { state } = useCart();
  const navigate = useNavigate();
  // jsx
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CartItems />
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
// finish
