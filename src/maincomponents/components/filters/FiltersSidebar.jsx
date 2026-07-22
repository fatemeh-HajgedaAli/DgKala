import { useState } from "react";
import PriceFilter from "./PriceFilter";
import SortBar from "../sorting/SortBar";
import { HiChevronDown } from "react-icons/hi";

function Section({ id, title, open, setOpen, children }) {
  const isOpen = open === id;

  return (
    <div className="border-b border-gray-100 py-2">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : id)}
        className="w-full flex items-center justify-between py-2"
      >
        <span className="font-semibold text-gray-700">{title}</span>

        <HiChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && <div className="pt-3 pb-2 space-y-2">{children}</div>}
    </div>
  );
}

export default function FiltersSidebar({ filters, setFilters }) {
  const [open, setOpen] = useState("sort");

  if (!filters || typeof setFilters !== "function") {
    return null;
  }

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: "all",
      brand: "all",
      sellerType: "all",
      onlyInStock: false,
      onlyFastDelivery: false,
      onlyFreeShipping: false,
      selectedColors: [],
      priceRange: [0, 20000000],
      sort: "newest",
    });
  };

  return (
    <div className="h-full flex flex-col text-sm">
      <h3 className="font-bold text-lg text-gray-700 mb-4">فیلترها</h3>

      <div className="flex-1 overflow-y-auto pr-2">
        {/* SORT */}
        <Section id="sort" title="مرتب‌سازی" open={open} setOpen={setOpen}>
          <SortBar filters={filters} setFilters={setFilters} />
        </Section>

        {/* SHIPPING */}
        <Section id="shipping" title="ارسال" open={open} setOpen={setOpen}>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyFastDelivery}
              onChange={(e) =>
                updateFilter("onlyFastDelivery", e.target.checked)
              }
            />
            ارسال سریع
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyFreeShipping}
              onChange={(e) =>
                updateFilter("onlyFreeShipping", e.target.checked)
              }
            />
            ارسال رایگان
          </label>
        </Section>

        {/* STOCK */}
        <Section id="stock" title="موجودی" open={open} setOpen={setOpen}>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onlyInStock}
              onChange={(e) => updateFilter("onlyInStock", e.target.checked)}
            />
            فقط کالاهای موجود
          </label>
        </Section>

        {/* CATEGORY */}
        <Section id="category" title="دسته‌بندی" open={open} setOpen={setOpen}>
          <select
            value={filters.category}
            onChange={(e) => updateFilter("category", e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="all">همه</option>
            <option value="book">کتاب</option>
            <option value="mobile">موبایل</option>
            <option value="electronics">دیجیتال</option>
          </select>
        </Section>

        {/* BRAND */}
        <Section id="brand" title="برند" open={open} setOpen={setOpen}>
          <select
            value={filters.brand}
            onChange={(e) => updateFilter("brand", e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="all">همه</option>
            <option value="Sony">Sony</option>
            <option value="LG">LG</option>
            <option value="Bosch">Bosch</option>
          </select>
        </Section>

        {/* PRICE */}
        <Section id="price" title="محدوده قیمت" open={open} setOpen={setOpen}>
          <PriceFilter filters={filters} setFilters={setFilters} />
        </Section>

        {/* SELLER */}
        <Section id="seller" title="نوع فروشنده" open={open} setOpen={setOpen}>
          <select
            value={filters.sellerType}
            onChange={(e) => updateFilter("sellerType", e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="all">همه</option>
            <option value="digikala">دیجی‌کالا</option>
            <option value="marketplace">فروشنده</option>
          </select>
        </Section>

        {/* RESET */}
        <button
          type="button"
          onClick={resetFilters}
          className="w-full mt-4 bg-gray-100 p-3 rounded-lg font-semibold"
        >
          حذف همه فیلترها
        </button>
      </div>
    </div>
  );
}
