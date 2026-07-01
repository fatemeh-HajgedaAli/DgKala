// searchInput
import { Link } from "react-router";
import mainLogo from "../../../assets/logos/dg-name-logo.svg";
import { useSearch } from "../../../context/SearchContext";
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
// start
export default function SearchInput() {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();
  console.log("SearchInput mounted");
  const handleSearch = () => {
    navigate("/products");
  };
  // jsx
  return (
    <div className="flex items-center gap-6 flex-1">
      <Link to="/Home">
        <img src={mainLogo} alt="logo" className="w-[120px]" />
      </Link>

      <div className="relative w-full max-w-[500px]">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSearchModal(true);
          }}
          onFocus={() => setShowSearchModal(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="جستجو"
          className="w-full h-[45px] bg-gray-100 rounded-xl px-10 text-sm outline-none"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <CgSearch onClick={handleSearch} className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
