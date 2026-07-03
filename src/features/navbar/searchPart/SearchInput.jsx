import { Link, useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";

import mainLogo from "../../../assets/logos/dg-name-logo.svg";
import { useSearch } from "../../../context/SearchContext";

export default function SearchInput() {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/products");
  };

  return (
    <div className="flex items-center gap-6 flex-1">
      {/* Logo */}
      <Link to="/home">
        <img src={mainLogo} alt="logo" className="w-[120px] cursor-pointer" />
      </Link>

      {/* Search */}
      <div className="relative w-full max-w-[500px]">
        <input
          type="text"
          value={search}
          placeholder="جستجو"
          className="w-full h-[45px] bg-gray-100 rounded-xl px-10 text-sm outline-none"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          type="button"
          onClick={handleSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <CgSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
}
