// price Filter
export default function PriceFilter({ filters, setFilters }) {
  const updateMinPrice = (value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [Number(value) || 0, prev.priceRange[1]],
    }));
  };

  const updateMaxPrice = (value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [prev.priceRange[0], Number(value) || 0],
    }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-gray-700 mb-4">بازه قیمت</h3>

      <div className="grid grid-cols-2 gap-3">
        {/* min price */}
        <div>
          <label className="text-xs text-gray-500 mb-1 block">
            از (تومان)
          </label>

          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => updateMinPrice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-red-500 focus:outline-none"
          />

          <p className="text-xs text-gray-400 mt-1">
            {filters.priceRange[0].toLocaleString("fa-IR")} تومان
          </p>
        </div>

        {/* max-price */}
        <div>
          <label className="text-xs text-gray-500 mb-1 block">
            تا (تومان)
          </label>

          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => updateMaxPrice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-red-500 focus:outline-none"
          />

          <p className="text-xs text-gray-400 mt-1">
            {filters.priceRange[1].toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-3 text-center">
        <p className="text-xs text-gray-500">بازه انتخاب شده</p>

        <p className="font-bold text-red-600 mt-1">
          {filters.priceRange[0].toLocaleString("fa-IR")}
          {" "}
          تا
          {" "}
          {filters.priceRange[1].toLocaleString("fa-IR")}
          {" "}
          تومان
        </p>
      </div>
    </div>
  );
}