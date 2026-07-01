// mobile-SearchPart
import { BsBell } from "react-icons/bs";
import { useSearch } from "../../context/SearchContext";
// navigate
import { useNavigate } from "react-router-dom";
// start
export default function MobileNavbarExtras() {
  const { search, setSearch, setShowSearchModal } = useSearch();
  const navigate = useNavigate();

  // jsx
  return (
    <div className="flex lg:hidden px-4 pb-3 mt-2">
      {/* search-input */}
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSearchModal(true);
        }}
        onFocus={() => setShowSearchModal(true)}
        className="w-full h-[45px] bg-white rounded-full border pr-3"
      />

      {!search && (
        <div className="absolute right-12 top-5 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          جستجو در <span className="text-red-600">دیجی‌کالا</span>
        </div>
      )}
{/* Bell-Btn */}
      <button
        onClick={() => navigate("/login")}
        className="text-slate-500 hover:text-slate-700"
      >
        <BsBell className="text-2xl" />
      </button>
    </div>
  );
}
// finish
