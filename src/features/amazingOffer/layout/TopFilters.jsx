// search Filter
import SearchBar from "../search/SearchBar";
import SortBar from "../sorting/AmazingSortBar";

export default function TopFilters({ filters, setFilters }) {
  return (
    <div className="space-y-3">
      <SearchBar />
      <SortBar filters={filters} setFilters={setFilters} />
    </div>
  );
}
