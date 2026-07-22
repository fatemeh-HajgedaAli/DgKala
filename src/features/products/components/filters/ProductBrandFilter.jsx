// Brand-filter
export default function ProductBrandFilter({ filters, setFilters, brands }) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <h3 className="font-bold mb-2">برند</h3>

      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        className="border p-2 w-full"
      >
        <option value="all">همه برندها</option>

        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
  );
}
