// headerAction
import { useState } from "react";
import { BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";

import CartPreview from "../../cartPart/CartPreview";
// start
export default function HeaderActions() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { state } = useCart();

  const [showCart, setShowCart] = useState(false);

  const cartCount = state.items.reduce((total, item) => total + item.qty, 0);
// jsx
  return (
    <div className="flex items-center gap-4">
      <button className="text-slate-500">
        <BsBell className="text-2xl" />
      </button>

      {!user ? (
        <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
          <BsDoorOpen />

          <Link to="/login">ورود</Link>

          <span>|</span>

          <Link to="/register">ثبت‌نام</Link>
        </div>
      ) : (
        <div>
          {user.email}

          <button onClick={logout}>خروج</button>
        </div>
      )}

      {/* CART */}
      <div className="relative">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative text-slate-500"
        >
          <BsCart2 className="text-3xl" />

          {cartCount > 0 && (
            <span
              className="
                absolute
                -top-2
                -left-2
                bg-red-500
                text-white
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              {cartCount}
            </span>
          )}
        </button>

        {showCart && <CartPreview closeCart={() => setShowCart(false)} />}
      </div>
    </div>
  );
}
