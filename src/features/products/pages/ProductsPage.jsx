// productPage
import { useEffect, useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

import GalleryTitle from "../components/GallaryTitle";
import ProductsGrid from "../components/productsPage/ProductsGrid";
import FiltersSidebar from "../components/filters/FiltersSidebar";
import LoadingScreen from "../../../components/ui/LoadingScreen";

import { getAllProducts } from "../services/product.service";
// start
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

  // FETCH PRODUCTS
  useEffect(() => {
    let isActive = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getAllProducts();

        if (isActive) {
          setProducts(data || []);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isActive = false;
    };
  }, []);

  // SCROLL LOCK (FILTER DRAWER)
  useEffect(() => {
    if (!isFilterOpen) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    console.log("search:", search);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isFilterOpen]);

  const filteredProducts = useFilteredProducts(products, filters, search);
  // console
  useEffect(() => {
    console.log("FIRST PRODUCT:", products?.[0]);
  }, [products]);
  // jsx
  return (
    <div className="p-5 relative min-h-screen">
      {/* HEADER */}
      <GalleryTitle
        filters={filters}
        setFilters={setFilters}
        setIsFilterOpen={setIsFilterOpen}
      />

      {/* PRODUCTS */}
      <ProductsGrid products={filteredProducts} />

      {/* LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
          <LoadingScreen />
        </div>
      )}

      {/* FILTER DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isFilterOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setIsFilterOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isFilterOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
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
