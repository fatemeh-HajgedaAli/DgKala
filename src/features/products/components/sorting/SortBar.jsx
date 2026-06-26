export default function SortBar({ filters, setFilters }) {
  return (
    <div className="flex items-center gap-3 bg-white border p-3 rounded-lg">
      <span className="font-bold">مرتب‌سازی:</span>

      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="border p-2"
      >
        <option value="newest">جدیدترین</option>
        <option value="price_low">ارزان‌ترین</option>
        <option value="price_high">گران‌ترین</option>
        <option value="rating">محبوب‌ترین</option>
      </select>
    </div>
  );
}
