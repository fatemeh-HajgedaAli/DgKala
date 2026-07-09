import { useSearch } from "../../../context/SearchContext";

export default function SearchBar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="bg-white border p-3 rounded-lg">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو در محصولات..."
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
