// filter drawer

import PriceFilter from "./PriceFilter";
import { colors } from "../../constants/quickFilters";

export default function FiltersSidebar({ filters, setFilters }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleColor = (color) => {
    if (filters.selectedColors.includes(color)) {
      updateFilter(
        "selectedColors",
        filters.selectedColors.filter((c) => c !== color),
      );
    } else {
      updateFilter("selectedColors", [...filters.selectedColors, color]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-300 space-y-5">
      <h3 className="font-bold text-lg text-gray-700">فیلترها</h3>

      {/* CATEGORY */}

      <div>
        <p className="mb-2 font-semibold text-red-600">دسته‌بندی</p>

        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 shadow-sm"
        >
          <option value="all">همه</option>
          <option value="book">کتاب</option>
          <option value="electronics">دیجیتال</option>
          <option value="mobile">موبایل</option>
          <option value="food">مواد غذایی</option>
          <option value="health">سلامت</option>
          <option value="beauty">آرایشی</option>
          <option value="travel">سفر</option>
          <option value="tools">ابزار</option>
          <option value="home">خانه</option>
          <option value="home-appliance">لوازم خانگی</option>
        </select>
      </div>

      {/* BRAND */}

      <div>
        <p className="mb-2 font-semibold text-red-600">برند</p>

        <select
          value={filters.brand}
          onChange={(e) => updateFilter("brand", e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 shadow-sm"
        >
          <option value="all">همه</option>
          <option value="Sony">Sony</option>
          <option value="LG">LG</option>
          <option value="Baseus">Baseus</option>
          <option value="Bosch">Bosch</option>
          <option value="Tefal">Tefal</option>
          <option value="Samsonite">Samsonite</option>
          <option value="La Roche-Posay">La Roche-Posay</option>
          <option value="Casio">Casio</option>
          <option value="Bestway">Bestway</option>
          <option value="Del Monte">Del Monte</option>
          <option value="Shilton">Shilton</option>
          <option value="Nature Made">Nature Made</option>
          <option value="یوروویتال">یوروویتال</option>
          <option value="کاله">کاله</option>
        </select>
      </div>

      {/* PRICE */}

      <PriceFilter filters={filters} setFilters={setFilters} />

      {/* COLORS */}

      <div>
        <p className="mb-3 font-semibold text-red-600">رنگ</p>

        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              title={color.name}
              onClick={() => toggleColor(color.name)}
              className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200
                ${
                  filters.selectedColors.includes(color.name)
                    ? "border-red-500 scale-110 shadow-md"
                    : "border-gray-300"
                }`}
              style={{
                backgroundColor: color.value,
              }}
            >
              {filters.selectedColors.includes(color.name) && (
                <span
                  className={`absolute inset-0 flex items-center justify-center text-xs font-bold
                    ${
                      color.name === "سفید" ||
                      color.name === "طلایی" ||
                      color.name === "نقره‌ای"
                        ? "text-black"
                        : "text-white"
                    }`}
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* SELLER */}

      <div>
        <p className="mb-2 font-semibold text-red-600">نوع فروشنده</p>

        <select
          value={filters.sellerType}
          onChange={(e) => updateFilter("sellerType", e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 shadow-sm"
        >
          <option value="all">همه</option>
          <option value="digikala">دیجی‌کالا</option>
          <option value="marketplace">فروشنده</option>
        </select>
      </div>

      {/* CHECKBOXES */}

      <div className="space-y-3 text-sm text-gray-600">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onlyInStock}
            onChange={(e) => updateFilter("onlyInStock", e.target.checked)}
          />
          فقط کالاهای موجود
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onlyFastDelivery}
            onChange={(e) => updateFilter("onlyFastDelivery", e.target.checked)}
          />
          ارسال سریع
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onlyFreeShipping}
            onChange={(e) => updateFilter("onlyFreeShipping", e.target.checked)}
          />
          ارسال رایگان
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onlyDigikalaStock}
            onChange={(e) =>
              updateFilter("onlyDigikalaStock", e.target.checked)
            }
          />
          موجود در انبار دیجی‌کالا
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onlySuperMarket}
            onChange={(e) => updateFilter("onlySuperMarket", e.target.checked)}
          />
          فقط سوپرمارکتی
        </label>
      </div>

      {/* RESET */}

      <button
        onClick={() =>
          setFilters({
            category: "all",
            brand: "all",
            sellerType: "all",

            onlyInStock: false,
            onlyFastDelivery: false,
            onlyFreeShipping: false,
            onlyDigikalaStock: false,
            onlySuperMarket: false,

            selectedColors: [],

            priceRange: [0, 20000000],

            sort: "newest",
          })
        }
        className="w-full rounded-lg bg-gray-100 p-3 font-semibold transition hover:bg-gray-200"
      >
        حذف همه فیلترها
      </button>
    </div>
  );
}
