// saearch-modals
import { useNavigate } from "react-router-dom";
import { amazingProducts } from "../../../data/categoriesData/amazingData";
import { useSearch } from "../../../context/SearchContext";
import { useDebounce } from "../../../hooks/useDebounce";
// start
export default function SearchModal() {
  const { search, showSearchModal, setShowSearchModal } = useSearch();
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search, 300);

  if (!showSearchModal) return null;

  const results = amazingProducts
    .filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    )
    .slice(0, 8);

  const highlight = (text) => {
    const regex = new RegExp(`(${debouncedSearch})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };
  // jsx
  return (
    <div
      className="fixed inset-0 bg-black/40 z-[999]"
      onClick={() => setShowSearchModal(false)}
    >
      <div
        className="bg-white w-full max-w-[600px] mx-auto mt-24 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {results.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/product/${item.id}`);
              setShowSearchModal(false);
            }}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
          >
            <img src={item.image} className="w-12 h-12 object-cover" />

            <div
              dangerouslySetInnerHTML={{
                __html: highlight(item.title),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
// finish
