import { useEffect, useRef, useState } from "react";
import { amazingProducts } from "../../data/categoriesData/amazingData";
import { Link } from "react-router-dom";

import { toFarsiNumber } from "../../utils/number";
import { formatPrice } from "../../utils/price";

import { useFilteredProducts } from "../../hooks/useFilteredProducts";
// icons
import { HiSortDescending } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
// filter
import FiltersSidebar from "../../components/components/filters/FiltersSidebar";

const SORTS = [
  "بیشترین تخفیف",
  "جدیدترین",
  "ارزان‌ترین",
  "گران‌ترین",
  "پرفروش‌ترین",
];

export default function AmazingAllPage() {
  // -----------------------------
  // FILTER STATE
  // -----------------------------
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

  const [showFilters, setShowFilters] = useState(false);
  const [search] = useState("");

  // -----------------------------
  // FILTERED PRODUCTS
  // -----------------------------
  const filteredProducts = useFilteredProducts(
    amazingProducts,
    filters,
    search,
  );

  // -----------------------------
  // PAGINATION (INFINITE SCROLL)
  // -----------------------------
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const loaderRef = useRef(null);

  useEffect(() => {
    setItems(filteredProducts.slice(0, 10));
    setPage(1);
  }, [filteredProducts]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const next = filteredProducts.slice(0, (page + 1) * 10);
        setItems(next);
        setPage((p) => p + 1);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [filteredProducts, page]);

  // -----------------------------
  // SORT HANDLER
  // -----------------------------
  const handleSort = (label) => {
    const map = {
      "بیشترین تخفیف": "discount",
      جدیدترین: "new",
      ارزان‌ترین: "price_low",
      گران‌ترین: "price_high",
      پرفروش‌ترین: "rating",
    };

    setFilters((prev) => ({
      ...prev,
      sort: map[label] || "new",
    }));
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="mx-5 mt-6 flex flex-col lg:flex-row gap-5">
      {/* ================= MOBILE TOP FILTERS ================= */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1"
        >
          <FiFilter />
          فیلتر
        </button>
      </div>
      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <aside className="hidden lg:block w-[260px] shrink-0 h-[calc(100vh-100px)] sticky top-5 bg-white rounded-xl border p-3 shadow-sm">
        <FiltersSidebar filters={filters} setFilters={setFilters} />
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-5">
          <h1 className="text-2xl font-bold">همه شگفت‌انگیزها</h1>

          {/* SORT LABEL (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
            <HiSortDescending />
            <span>مرتب‌سازی:</span>
          </div>

          {/* SORT BUTTONS */}
          <div className="flex items-center gap-1 text-sm text-gray-500 overflow-x-auto">
            {SORTS.map((s) => (
              <button
                key={s}
                onClick={() => handleSort(s)}
                className="
                  px-3 py-1
                  border border-gray-300
                  lg:border-0
                  rounded-full
                  whitespace-nowrap
                  hover:text-gray-700
                  transition
                "
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-row  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {items.map((item) => {
            const { price, discountPercent, finalPrice } = item.pricing;
            const { value: rating } = item.rating;
            const { stock, inStock } = item.inventory;

            return (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="
                  bg-white
                  border border-gray-200
                  p-3
                  rounded-xl
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <img
                  src={item.images?.[0]}
                  className="w-full h-40 object-contain"
                />

                <h3 className="text-xs mt-2 line-clamp-2 h-10 text-gray-700">
                  {item.title}
                </h3>

                <div className="flex justify-end text-xs mt-1 text-yellow-500">
                  ★ {toFarsiNumber(rating.toFixed(1))}
                </div>

                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                      %{toFarsiNumber(discountPercent)}
                    </span>

                    <span className="font-bold text-sm">
                      {formatPrice(finalPrice)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 line-through text-left">
                    {formatPrice(price)}
                  </p>
                </div>

                <div className="text-xs mt-2 text-red-500">
                  {inStock ? `فقط ${toFarsiNumber(stock)} عدد` : "ناموجود"}
                </div>
              </Link>
            );
          })}
        </div>

        {/* INFINITE SCROLL TRIGGER */}
        <div ref={loaderRef} className="h-10" />
      </div>
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />

          {/* Modal */}
          <div className="absolute bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-2xl p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">فیلترها</h2>

              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>

            <FiltersSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}
    </div>
  );
}
