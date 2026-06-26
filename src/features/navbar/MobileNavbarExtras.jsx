import { useSearch } from "../../context/SearchContext";

export default function MobileNavbarExtras() {
  const { search, setSearch } = useSearch();

  return (
    <div className="lg:hidden px-4 pb-3 mt-2 ">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[45px] bg-white rounded-full border pr-3"
        />

        {!search && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
            جستجو در <span className="text-red-600">دیجی‌کالا</span>
          </div>
        )}
      </div>
    </div>
  );
}
