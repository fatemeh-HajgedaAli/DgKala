// MAIN-PRODUCTS
import { useState, useEffect } from "react";
import { useSearch } from "../../../context/SearchContext";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { FaFilter } from "react-icons/fa";
// COMPONENT
import GalleryTitle from "../components/GallaryTitle";
import ProductsGrid from "../components/productsPage/ProductsGrid";
import FiltersSidebar from "../components/filters/FiltersSidebar";
// SERVICES
import { getAllProducts } from "../services/product.service";
// START
export default function ProductsPage() {
  const { search } = useSearch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isFilterOpen, setIsFilterOpen] = useState(false);
// filter/state
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    onlyInStock: false,
    onlyFastDelivery: false,
    onlyFreeShipping: false,
    onlyDigikalaStock: false,
    onlySuperMarket: false,
    sellerType: "all",
    priceRange: [0, 20000000],
    selectedColors: [],
    sort: "newest",
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const filteredProducts = useFilteredProducts(products, filters, search);
// jsx
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
       {/* FILTER-BTN */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="rounded-full bg-gray-200 p-4 shadow hover:bg-gray-300 transition"
        >
          <FaFilter className="text-gray-700" />
        </button>
      </div>
{/* TOP-FILTER */}
      <GalleryTitle filters={filters} setFilters={setFilters} />

      {loading ? (
        <p className="text-center text-gray-500 py-10">در حال بارگذاری...</p>
      ) : (
        <ProductsGrid products={filteredProducts} />
      )}

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setIsFilterOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <div className="relative w-80 h-full bg-white shadow-2xl p-5 overflow-y-auto">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mb-5 text-red-500 hover:text-red-700"
            >
              ✕ بستن
            </button>

            <FiltersSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}
    </div>
  );
}
