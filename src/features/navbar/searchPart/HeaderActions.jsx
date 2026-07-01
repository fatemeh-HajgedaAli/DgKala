import { BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function HeaderActions() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-4">
      <button className="text-slate-500 hover:text-slate-700">
        <BsBell className="text-2xl" />
      </button>

      {/* AUTH SECTION */}
      {!user ? (
        <div className="flex items-center gap-2 border border-slate-300 rounded-xl px-3 py-2">
          <BsDoorOpen className="text-lg " />
          <Link to="/login" className="text-sm">
            ورود
          </Link>
          <span className="text-slate-300">|</span>
          <Link to="/register" className="text-sm">
            ثبت‌نام
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm">{user.email}</span>
          <button onClick={logout} className="text-red-500 text-sm">
            خروج
          </button>
        </div>
      )}

      {/* CART */}
      <button
        onClick={() => navigate("/CartPage")}
        className="text-slate-300 hover:text-slate-600"
      >
        <BsCart2 className="text-4xl border-r-1 border-slate-600 pr-2" />
      </button>
    </div>
  );
}
