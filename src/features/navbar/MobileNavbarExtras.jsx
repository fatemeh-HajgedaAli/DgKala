// mobile-SearchPart - جستجو دردیجی‌کالا
// icons
import { BsBell } from "react-icons/bs";
import { TbCameraSearch } from "react-icons/tb";
// context
import { useSearch } from "../../context/SearchContext";
// navigate
import { useNavigate } from "react-router-dom";
// start
export default function MobileNavbarExtras() {
  const { search, setSearch, setShowSearchModal } = useSearch();
  const navigate = useNavigate();

  // jsx
  return (
    <div className="flex lg:hidden px-4 pb-3 mx-2 ">
      {/* search-input */}
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSearchModal(true);
        }}
        onFocus={() => setShowSearchModal(true)}
        className="w-full h-[45px] bg-white rounded-full border-1 border-gray-200 ml-5 mt-4 "
      />
      {/* input -text/icon */}
      {!search && (
        <div
          className="
  absolute
  right-10
  top-9
  flex
  w-[320px]
  -translate-y-1/2
  items-center
  justify-between
  text-sm
  text-gray-400
  pointer-events-none
"
        >
          <span>
            جستجو در{" "}
            <span className="font-semibold text-red-600">دیجی‌کالا</span>
          </span>
          {/* camera Icon */}
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient
                id="cameraGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#811edd" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#415aa0" />
              </linearGradient>
            </defs>

            <TbCameraSearch size={24} stroke="url(#cameraGradient)" />
          </svg>
        </div>
      )}
      {/* Bell-Btn */}
      <button
        onClick={() => navigate("/login")}
        className="text-slate-900 hover:text-slate-700 bg-white mt-3 p-3 rounded-full"
      >
        <BsBell className="text-2xl" />
      </button>
    </div>
  );
}
// finish
