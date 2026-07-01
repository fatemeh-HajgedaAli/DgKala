import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        showSearchModal,
        setShowSearchModal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
