// MAIN GALLARY PAGE 
import { useState, useEffect } from "react";
import { useSearch } from "../../../context/SearchContext";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { FaFilter } from "react-icons/fa";

import GalleryTitle from "../components/GallaryTitle";
import ProductsGrid from "../components/productsPage/ProductsGrid";
import FiltersSidebar from "../components/filters/FiltersSidebar";

import { getAllProducts } from "../services/product.service";

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

  const filteredProducts = useFilteredProducts(products, filters, search);
console.log(products);
console.log(filteredProducts);
  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="rounded-full bg-gray-200 p-4"
        >
          <FaFilter />
        </button>
      </div>

      <GalleryTitle filters={filters} setFilters={setFilters} />

      {loading ? (
        <p className="text-center">در حال بارگذاری...</p>
      ) : (
        <ProductsGrid products={filteredProducts} />
      )}

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />

          <div className="w-80 bg-white p-5">
            <FiltersSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}
    </div>
  );
}
