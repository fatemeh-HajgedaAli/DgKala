// search Filter
import SearchBar from "../search/SearchBar";
import SortBar from "../sorting/SortBar";

export default function ProductTopFilters({ filters, setFilters }) {
  return (
    <div className="space-y-3">
      <SearchBar />
      <SortBar filters={filters} setFilters={setFilters} />
    </div>
  );
}
