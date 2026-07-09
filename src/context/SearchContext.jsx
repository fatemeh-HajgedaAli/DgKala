import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  // ================= SEARCH =================
  const [search, setSearch] = useState("");

  // ================= MODAL =================
  const [showSearchModal, setShowSearchModal] = useState(false);

  // ================= GLOBAL FILTERS =================
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    onlyInStock: false,
    priceRange: [0, 999999999],
    onlyFastDelivery: false,
    onlyFreeShipping: false,
    sellerType: "all",
    selectedColors: [],
    sort: "new",
  });

  // ================= PAGINATION / UI STATE (optional) =================
  const [page, setPage] = useState(1);

  return (
    <SearchContext.Provider
      value={{
        // search
        search,
        setSearch,

        // modal
        showSearchModal,
        setShowSearchModal,

        // filters (GLOBAL)
        filters,
        setFilters,

        // pagination (optional global)
        page,
        setPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
