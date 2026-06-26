export default function TopFilters({ maxPrice, setMaxPrice }) {
  return (
    <input
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      placeholder="حداکثر قیمت"
      className="border p-2 rounded w-full"
    />
  );
}
