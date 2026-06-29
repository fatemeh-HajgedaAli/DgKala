import { useState, useEffect } from "react";
import { useSearch } from "../../../context/SearchContext";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

import GalleryTitle from "../components/GallaryTitle";
import ProductsGrid from "../components/productsPage/ProductsGrid";
import FiltersSidebar from "../components/filters/FiltersSidebar";

import { getAllProducts } from "../services/product.service";
import LoadingScreen from "../../../components/ui/LoadingScreen";

export default function ProductsPage() {
  const { search } = useSearch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    onlyInStock: false,
    onlyFastDelivery: false,
    onlyFreeShipping: false,
    sellerType: "all",
    priceRange: [0, 20000000],
    selectedColors: [],
    sort: "newest",
  });
  // loading
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const load = async () => {
    setLoading(true);

    const [data] = await Promise.all([getAllProducts(), delay(2000)]);

    setProducts(data || []);
    setLoading(false);
  };
  // fetch products
  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      const data = await getAllProducts();

      if (active) {
        setProducts(data || []);
        setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  // scroll lock + layout shift fix
  useEffect(() => {
    if (isFilterOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isFilterOpen]);

  const filteredProducts = useFilteredProducts(products, filters, search);

  return (
    <div className="p-5 relative min-h-screen">
      {/* HEADER */}

      {/* TITLE */}
      <GalleryTitle
        filters={filters}
        setFilters={setFilters}
        setIsFilterOpen={setIsFilterOpen}
      />

      {/* PRODUCTS */}
      <ProductsGrid products={filteredProducts} />

      {/* FULL PAGE LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
          <LoadingScreen />
        </div>
      )}

      {/* DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isFilterOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsFilterOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isFilterOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl 
        flex flex-col transform transition-transform duration-300 ease-in-out
        ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
      `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 overflow-y-auto p-5">
            <FiltersSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}
