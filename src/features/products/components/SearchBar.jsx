export default function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="جستجوی محصول..."
      className="border p-2 rounded w-full"
    />
  );
}
